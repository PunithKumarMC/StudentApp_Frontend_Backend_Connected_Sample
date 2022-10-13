import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree,Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudAuthGuard implements CanActivate {
  isvalid: boolean = false;
  constructor(private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.guard();
  }
  guard(){
    if (this.isvalid == true) {
      return true;
    }
    else {
      return this.router.parseUrl("/login");
    }
  }
  
}
