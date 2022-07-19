import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthorizeLoginService } from './authorize-login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorizeLoginGuard implements CanActivate {

  constructor(
    private auth: AuthorizeLoginService,
    private router: Router
  ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let y = this.auth.getCourier()
    if (!y) {
      this.router.navigate(['login'])
      return false;
    }
      return true;
  }
  
}
