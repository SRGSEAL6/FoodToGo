import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationFormService } from './registration-form.service';

@Component({
  selector: 'app-courier-registration',
  templateUrl: './courier-registration.component.html',
  styleUrls: ['./courier-registration.component.css']
})
export class CourierRegistrationComponent implements OnInit {

  @Output() save = new EventEmitter();

  registerCourierForm!: FormGroup

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private registrationFormService: RegistrationFormService
  ) { }

  ngOnInit(): void {
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

  handleSubmit(event: Event) {
    if(this.registerCourierForm.valid){
      this.registrationFormService.submitNewCourier(this.registerCourierForm.value)
        .subscribe({
          next:()=>{
            this.router.navigate(['courierLogin'])
          }
        })
    }
  }
}
