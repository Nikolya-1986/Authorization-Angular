import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  public getUserDetails() {
    if(localStorage.getItem('userData')) {
      return localStorage.getItem('userData')
    } else {
      return null;
    }
  };

  public setDataInLocalStorage(variableName: string, data: string) {
    localStorage.setItem(variableName, data);
  };

  public getToken() {
    return localStorage.getItem('token');
  };

  public clearStorage() {
    localStorage.clear();
  };
  
}
