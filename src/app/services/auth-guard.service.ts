import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(
    private _localStorageService: LocalStorageService,
    private _router: Router,
  ) { }

  public canActivate(
    activatedRouteSnapshot: ActivatedRouteSnapshot, 
    routerStateSnapshot: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if(this._localStorageService.getToken()) {
      return true;
    } else {
      this._router.navigate(['/login']);
      return false;
    }
  }

}
