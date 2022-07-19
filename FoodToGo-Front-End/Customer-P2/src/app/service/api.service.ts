import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }
  
  getProduct(){
    return this.http.get<any>('./assets/mock_data.json')
    .pipe(map((res:any)=>{
      console.log(res);
      return res;
    }))
  }
}
