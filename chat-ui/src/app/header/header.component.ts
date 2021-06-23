import { Component, OnInit } from '@angular/core';
import { AppserviceService} from '../appservice.service'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [AppserviceService]
})
export class HeaderComponent implements OnInit {
  
  constructor(private serv: AppserviceService) { }

  ngOnInit(): void {
  }
 
}
