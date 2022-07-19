import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
    courierId: number, 
    courierName: string,
    DOB: string,
    driversLicenseNum: string,
    makeAndModel: string,
    licensePlateNum: string,
    email: string,
    courierPassword: string,
) {
    return this.httpClient.patch(this.courierURL, {
      id: courierId,
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
