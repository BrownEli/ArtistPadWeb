import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-footer',
  templateUrl: './app-footer.component.html',
  styleUrls: ['./app-footer.component.css']
})
export class AppFooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  openAppInGooglePlay(){
	  //console.log("in openAppInGooglePlay method");
	  window.open('https://play.google.com/store/apps/details?id=com.elibrown.artistpad');
  }

}
