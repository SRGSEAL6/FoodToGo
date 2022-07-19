import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthorizeLoginService } from 'src/app/Courier-Introduction-Page/courier-login/authorize-login.service';
import { RegistrationFormService } from 'src/app/Courier-Introduction-Page/courier-registration/registration-form.service';

@Component({
  selector: 'app-courier-profile',
  templateUrl: './courier-profile.component.html',
  styleUrls: ['./courier-profile.component.css']
})
export class CourierProfileComponent implements OnInit {

  forms: Array<any> = []
  
  updateRegistrationForm!: FormGroup

  constructor(
    private fb: FormBuilder,
    private registrationFormService: RegistrationFormService,
    private authService: AuthorizeLoginService,
  ) { }

  ngOnInit(): void {
    this.registrationFormService.getCourierForm()
      .subscribe((forms: any)=>{
        this.forms = forms
      })

    }

  handleUpdate(
    courierId: number, 
    courierName: string,
    DOB: string,
    driversLicenseNum: string,
    makeAndModel: string,
    licensePlateNum: string,
    email: string,
    courierPassword: string,
  ){
    this.registrationFormService.updateCourierForm(
      courierId,courierName,DOB,driversLicenseNum,makeAndModel,licensePlateNum,email,courierPassword
    )
      .subscribe({
        next: () => {
          let regForm = this.forms.find(form => form.id === courierId);
          regForm.courierName = courierName,
          regForm.DOB = DOB,
          regForm.driversLicenseNum = driversLicenseNum,
          regForm.makeAndModel = makeAndModel,
          regForm.licensePlateNum = licensePlateNum,
          regForm.email = email,
          regForm.courierPassword = courierPassword
        }

      })
  }
}

