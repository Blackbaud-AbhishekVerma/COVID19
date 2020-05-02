import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './user-login.service';

@Injectable({providedIn: 'root'})
export class AuthGaurdService implements CanActivate {

    constructor(private loginService: LoginService) { }

    canActivate(route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return this.loginService.isUserLoggedIn();
            
    }
}