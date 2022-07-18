import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorizeLoginService {

  authStream=new BehaviorSubject<any>({isUserLoggedIn:false})

  constructor(
    private httpClient: HttpClient
  ) { }

    isLoggedIn(){
      let token = localStorage.getItem("auth-token")
      if(token)
        return true
      else
        return false
    }

    doLogin(credentials: object){
      return this.httpClient.post("http://localhost:8181/login", credentials)
        .pipe(tap((response:any) => {
          const jwtToken=response.jwt;
          localStorage.setItem("auth-token", jwtToken)
          this.authStream.next({isLoggedIn:true})
        }))
    }





}
