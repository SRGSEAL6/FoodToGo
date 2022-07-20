import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorizeLoginService {

  authStream = new BehaviorSubject<any>({isLoggedIn: false})
  courierDetails: any = {}

  constructor(
    private httpClient: HttpClient
  ) {
  }
  

  doLogin(credentials: object) {
    return this.httpClient.post("http://localhost:8181/login", credentials)
      .pipe(tap((response: any) => {
          this.authStream.next({isLoggedIn: true})
        }
      ))
  }

  doLogout() {
    this.authStream.next({isLoggedIn: false})
  }

  getCourier() {
    return this.httpClient.get("http://localhost:8181/api/courier")
      .pipe(tap((response: any) => {
        this.courierDetails = response
      }))
  }
}
