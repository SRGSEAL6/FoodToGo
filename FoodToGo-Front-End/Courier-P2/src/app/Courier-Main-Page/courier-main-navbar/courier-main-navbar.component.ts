import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courier-main-navbar',
  templateUrl: './courier-main-navbar.component.html',
  styleUrls: ['./courier-main-navbar.component.css']
})
export class CourierMainNavbarComponent implements OnInit {


  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  btnCurrentRequests =  () => {
    this.router.navigate(['courierCurrentRequest']);
  };

  btnAcceptedRequests =  () => {
    this.router.navigate(['courierAcceptedRequest']);
  };

  btnProfile =  () => {
    this.router.navigate(['courierSignUp']);
  };

  btnLogout =  () => {
    this.router.navigate(['CourierIntroPage']);
  };



}
