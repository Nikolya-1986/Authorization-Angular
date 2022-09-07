import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly _BASEURL = 'http://localhost:3000/api/';

  constructor(
    private _httpClient: HttpClient,
  ) { }

  public getTypeRequest(url: string): Observable<any> {
    return this._httpClient.get(`${this._BASEURL}${url}`).pipe(
      map(result => {
        return result;
      })
    )
  };

  public postTypeRequest(url: string, data: any):  Observable<any> {
    return this._httpClient.post(`${this._BASEURL}${url}`, data).pipe(
      map(result => {
        return result;
      })
    )
  };

  public putTypeRequest(url: string, data: any):  Observable<any> {
    return this._httpClient.post(`${this._BASEURL}${url}`, data).pipe(
      map(result => {
        return result;
      })
    )
  };

}
