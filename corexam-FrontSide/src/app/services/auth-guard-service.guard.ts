import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenStorageService } from '../services/token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardServiceGuard implements CanActivate {

private roles =[];

  constructor(  private tokenStorage: TokenStorageService , private router: Router){
    this.roles =[];
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {



        if (this.tokenStorage.getToken() !== null){

          this.roles = this.tokenStorage.getUser().roles;


            if (this.roles.includes(route.data.role)) {
              return true
            }
            else {
              this.tokenStorage.signOut();
              this.router.navigate(['login'])
              return false;
            }


        }else {
          this.tokenStorage.signOut();
          this.router.navigate(['login'])
          return false;
        }

  }

}
