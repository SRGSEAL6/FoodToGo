import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-courier-introduction-navbar',
  templateUrl: './courier-introduction-navbar.component.html',
  styleUrls: ['./courier-introduction-navbar.component.css']
})
export class CourierIntroductionNavbarComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  btnCourierOpportunities =  () => {
    this.router.navigate(['courierOpportunities']);
  };

  btnSignUp =  () => {
    this.router.navigate(['courierSignUp']);
  };

  btnLogin =  () => {
    this.router.navigate(['courierLogin']);
  };

}
