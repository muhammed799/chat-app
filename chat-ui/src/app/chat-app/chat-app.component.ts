import { Component, OnInit } from '@angular/core';
declare var $: any;
import { AppserviceService } from '../appservice.service'
import { v4 as uuidv4 } from 'uuid';




@Component({
  selector: 'app-chat-app',
  templateUrl: './chat-app.component.html',
  styleUrls: ['./chat-app.component.css']
})
export class ChatAppComponent implements OnInit {

  message!: string;
  uuidValue;
  message_list :{message:string,username:string,mine:boolean}[] = [];
  mine : any;
  //common_list :{message:string,username:string}[] = [];

  constructor(private service: AppserviceService) {}
  ngOnInit(): void {
    //check if id exist

    if (localStorage.getItem('key')) {
      console.log('already available')
      this.service.connect_socket(
        {
        user_id:localStorage.getItem('key'),
        user_name:localStorage.getItem('username')
        })

    }
    else {
      var user = prompt("enter your name to chat");
      localStorage.setItem('username', user);
      localStorage.setItem('key', this.generateUUID());
      this.service.connect_socket(
        {
        user_id:localStorage.getItem('key'),
        user_name:localStorage.getItem('username')
        })
    } 
    //get all messages
    this.service.getAllMessages({page:1 ,limit:10}).subscribe((res:any)=>{
      for (var res of res){
        if(res.username == localStorage.getItem('username')){
          this.message_list.push({message:res.msg,username: res.username, mine:true})
        }
        else{
          this.message_list.push({message:res.msg,username: res.username, mine:false})
        }
      }
          
    })

    //if socket connection -success
    this.service.socket_connection().subscribe(res => {
      console.log("connection ", res)
    })
    //recieve msg from other clients
    this.service.broadcast_message().subscribe(res => {
      if (res) {
        
          this.message_list.push({message:res['msg'],username: res['username'], mine:false})
        
       
      }
    });

   

  };

  //used to send the message to server to broadcast to all users except this
  SendMessage() {
    let user = localStorage.getItem('username');
    this.service.socket.emit('message', { msg: this.message,username: user });
    this.message_list.push({message:this.message,username: user, mine:true})
    this.message = '';
  };

  generateUUID() {
    this.uuidValue = uuidv4();
    return this.uuidValue;
  }





}
