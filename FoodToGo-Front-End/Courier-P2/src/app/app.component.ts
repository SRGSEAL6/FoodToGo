import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { AuthorizeLoginService } from './Courier-Introduction-Page/courier-login/authorize-login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Courier-P2';

  isLoggedIn = false;
  courierDetails: any = {};

  constructor(
    private auth: AuthorizeLoginService,
  ) { }

  ngOnInit(): void {
    this.auth.authStream.subscribe({
      next: (data: any) => {
        if (data.isLoggedIn){
          this.isLoggedIn = data.isLoggedIn
          this.auth.getCourier()
            .subscribe({
              next: (courier: any) => {
                this.courierDetails = courier;
              }
            })
          }
        }
      })
    }

}
