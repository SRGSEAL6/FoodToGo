import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Courier-P2';

  // isLoggedIn = false;
  // courierDetails: any = {};

  constructor(
    // private auth: AuthorizeLoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // this.auth.authStream.subscribe({
    //   next: (data: any) => {
    //     if (data.isLoggedIn){
    //       this.isLoggedIn = data.isLoggedIn
    //       this.auth.getCourier()
    //         .subscribe({
    //           next: (courier: any) => {
    //             this.courierDetails = courier;
    //           }
    //         })
    //       }
    //     }
    //   })
    }


    btnCurrentRequests =  () => {
      this.router.navigate(['courierCurrentRequest']);
    };
  
    btnAcceptedRequests =  () => {
      this.router.navigate(['courierAcceptedRequest']);
    };
  
    btnProfile =  () => {
      this.router.navigate(['courierProfile']);
    };
  
    // btnLogout =  () => {
    //   this.router.navigate(['CourierIntroPage']);
    // };


}
