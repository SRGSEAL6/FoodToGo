import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }
  //'./assets/mock_data.json
  getProduct(){
    return this.http.get<any>('http://localhost:8181/api/getFood')
    .pipe(map((res:any)=>{
      console.log(res);
      return res;
    }))
  }
}
