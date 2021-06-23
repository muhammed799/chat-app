import { getMissingNgModuleMetadataErrorData, getUrlScheme } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AppserviceService } from '../appservice.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  user_list :string[] = [];
  constructor(private service :AppserviceService) { }

  ngOnInit(): void {
     
     this.getuser();
    
    

  };
  

  //fn:- to get users who are online currently
  getuser(){
    this.service.socket.emit('userlist-event',);

    this.service.recieve_userlist().subscribe((res:string[])=>{
      this.user_list =res;
    });
  };

}
 