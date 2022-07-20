import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RegistrationFormService } from './registration-form.service';

@Component({
  selector: 'app-courier-registration',
  templateUrl: './courier-registration.component.html',
  styleUrls: ['./courier-registration.component.css']
})
export class CourierRegistrationComponent implements OnInit {

  courierSignUp = false;

  registerCourierForm!: FormGroup

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private registrationFormService: RegistrationFormService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.data
      .subscribe({
        next: (data: any) => {
          this.courierSignUp = data.courierSignUp
        }
      })
    this.registerCourierForm = this.fb.group({
      courierName: ['', [Validators.required]],
      DOB: ['', [Validators.required]],
      driversLicenseNum: ['', [Validators.required]],
      makeAndModel: ['', [Validators.required]],
      licensePlateNum: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      courierPassword: ['', [Validators.required]],
      // backgroundCheck: [ , [Validators.required]]
    })
  }

  handleSubmit() {
    if(this.courierSignUp){
      this.registrationFormService.submitNewCourier(this.registerCourierForm.value)
        .subscribe({
          next:()=>{
            this.router.navigate(['courierLogin'])
    }
        })
    }else{
      this.registerCourierForm.patchValue(this.registerCourierForm)
    }
  }
}
