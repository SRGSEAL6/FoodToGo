import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthorizeLoginService } from '../courier-login/authorize-login.service';

@Injectable({
  providedIn: 'root'
})

export class RegistrationFormService {

  courierURL = "http://localhost:8181/api/registerCourier";

  constructor(
    private httpClient: HttpClient,
  ) { }

  submitNewCourier(registerCourierForm: any){
    return this.httpClient.post(this.courierURL, registerCourierForm)
  }

  getCourierForm() {
    return this.httpClient.get(this.courierURL)
  }

  updateCourierForm(
    courierName: string,
    DOB: string,
    driversLicenseNum: string,
    makeAndModel: string,
    licensePlateNum: string,
    email: string,
    courierPassword: string,
) {
    return this.httpClient.patch(this.courierURL, {
      courierName: courierName,
      DOB: DOB,
      driversLicenseNum: driversLicenseNum,
      makeAndModel: makeAndModel,
      licensePlateNum: licensePlateNum,
      email: email,
      courierPassword: courierPassword
    })
  }

}
