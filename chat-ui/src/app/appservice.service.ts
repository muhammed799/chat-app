import { Injectable, OnInit } from '@angular/core';
import { observable, Observable } from 'rxjs';
import { io } from 'socket.io-client';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class AppserviceService {
  uuidValue: string;
  address: any = 'http://localhost:4000';
  public socket;
  user_id;
  user_name;

  apiURL = 'http://localhost:4000';
  constructor(private http: HttpClient) { }

  connect_socket(params) {
    this.socket = io(this.address, {
      transports: ['websocket'],
      query: {
        "key": params.user_id,
        "username": params.user_name
      }
    });
  }

  //fn:- used to check if connection success
  socket_connection() {
    return new Observable(observer => {
      this.socket.on('emitted', (res) => {
        observer.next(res)
      })
    })
  }

  //fn:-used to recieve the msg from server
  broadcast_message() {
    return new Observable(observer => {
      this.socket.on('broadcast', (res) => {
        observer.next(res)
      })
    })
  }

  //fn used to recieve userlist
  recieve_userlist() { 
    return new Observable(observer => {
        this.socket.on('userlist',((res:string[])=>{
          observer.next(res)
        }))
        
    });
  }

  //fn to call server to get all messages

  // HttpClient API get() method => Fetch messages
  getAllMessages(params){
    return  new Observable(observer=>{

      this.http.post(this.apiURL + '/message',params)
            .subscribe(res=>{
               observer.next(res)
               observer.complete();
            })


    })

  }

  Delete_Message(id){
     return new Observable(observer =>{
        this.http.post(this.apiURL+ '/message/delete',{id : id})
               .subscribe(res =>{
                 observer.next(res)
                 observer.complete()
               })
     })
  }
  

}
