import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-install-app',
  templateUrl: './home-install-app.component.html',
  styleUrls: ['./home-install-app.component.css']
})
export class HomeInstallAppComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  openAppInGooglePlay(){
	  //console.log("in openAppInGooglePlay method");
	  window.open('https://play.google.com/store/apps/details?id=com.elibrown.artistpad');
  }
}
