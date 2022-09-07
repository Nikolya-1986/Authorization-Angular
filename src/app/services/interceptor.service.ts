import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(
    private _localStorageService: LocalStorageService,
  ) { }

  public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this._localStorageService.getToken();
    if(!request.headers.has('Content-Type')) {
      request = request.clone({
        headers: request.headers.set('Content-Type', 'application/json'),
      })
    } 
    const authRequest = request.clone({
      headers: request.headers.set('Accept', 'application/json'),
    }).clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
    return next.handle(authRequest);
  };

}
