import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from,of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CourierProfileService {

  courierURL: string = 'http://localhost:8181/api/registerCourier';

  constructor(
    private httpClient: HttpClient
  ) { }

  getCourierProfile(){
    
  }

  updateCourierProfile(updateCourierForm: any){
    return this.httpClient.post(this.courierURL, updateCourierForm)
  }

}
