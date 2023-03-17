import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from '../Services/auth-service.service';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthServiceService, private router: Router){};
  canActivate(
    next: ActivatedRouteSnapshot,

    state: RouterStateSnapshot):any{

      if (!this.authService.isLoggedIn()) {

        this.router.navigate(['/login']); // go to login if not authenticated

        return false;
  }else{
    return true;
  }

}}
