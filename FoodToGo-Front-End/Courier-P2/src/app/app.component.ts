import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizeLoginService } from './Courier-Introduction-Page/courier-login/authorize-login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Courier-P2';

  isUserLoggedIn = false

  constructor(
    private router: Router,
    private auth: AuthorizeLoginService
  ) { }

  ngOnInit(): void {
    this.isUserLoggedIn=this.auth.isLoggedIn()
    console.log(this.isUserLoggedIn)
    this.auth.authStream.subscribe({
      next:(au:any)=>{
        this.isUserLoggedIn=au.isLoggedIn
      }
    })
  }


}
