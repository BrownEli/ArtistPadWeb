import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';

declare var loadPrivacyPolicy : any;

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.css']
})
export class PrivacyPolicyComponent implements OnInit {

  constructor() { }
  
  ngOnInit() {
	loadPrivacyPolicy();
  }
}
  