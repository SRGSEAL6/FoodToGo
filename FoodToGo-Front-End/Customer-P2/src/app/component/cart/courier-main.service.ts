import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourierMainService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  getCourierMain(){
    return this.httpClient.get("http://localhost:8181/api/private-resource",
    { headers:{
        "Authorization":"Bearer "+localStorage.getItem("auth-token")
      },
      responseType:'text'
    }
    );
  }
}
