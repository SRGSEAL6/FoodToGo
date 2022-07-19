import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthorizeLoginService } from './authorize-login.service';


@Component({
  selector: 'app-courier-login',
  templateUrl: './courier-login.component.html',
  styleUrls: ['./courier-login.component.css']
})
export class CourierLoginComponent implements OnInit {

  courierLoginForm!:FormGroup

  constructor(
    private router: Router,
    private auth: AuthorizeLoginService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.courierLoginForm = this.fb.group({
      courierEmail:[''],
      courierPassword:['']
    })
  }

  handleSubmit(){
    this.auth.doLogin(this.courierLoginForm.value)
      .subscribe({
        next:(response:any)=>{
          this.router.navigate([''])
        }
      })
  }


}
