import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from,of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CourierProfileService {


  constructor(
    private httpClient: HttpClient
  ) { }

  getCourierProfile(){
    
  }



}
