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
    console.log("Token from interceptor", token);

    if (token != null) {
      request = request.clone(
        {
          setHeaders: {
            'Content-Type': 'application/json; charset=utf-8',
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`
           }
        }
      )
    }
    return next.handle(request);
  };

}
