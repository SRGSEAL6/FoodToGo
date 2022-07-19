import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourierIntroductionService {

  constructor(
    private httpClient: HttpClient,
  ) { }

    getCourierIntroduction(){
      return this.httpClient.get("http://localhost:8181/api/public-resource",
        {responseType:'text'}
        )
    }

}
