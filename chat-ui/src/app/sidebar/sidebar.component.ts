import { Component, OnInit } from '@angular/core';
import {AppserviceService} from '../appservice.service'
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  providers:[AppserviceService]
})
export class SidebarComponent implements OnInit {
  
 
  constructor(private serv : AppserviceService) { }

  ngOnInit(): void {
    
  }
  
}
