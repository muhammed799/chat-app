import { Component, OnInit } from '@angular/core';
declare var $: any
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'loan-ui';

  ngOnInit() {

     "use strict";
    $("#toggle_button").on('click', function (e: any) {
      e.preventDefault()
      $("#sidebarMenu").toggleClass("invisible");
    });
  }
}
