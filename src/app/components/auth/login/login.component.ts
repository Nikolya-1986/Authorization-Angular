import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { ApiService } from '../../../services/api.service';
import { LocalStorageService } from '../../../services/local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public isLogin: boolean = false;
  publicerrorMessage: any;

  constructor(
    private _apiService: ApiService, 
    private _localStorageService: LocalStorageService, 
    private _router: Router
  ) { }

  public ngOnInit(): void {
    this._isUserLogin();
  };

  public onSubmit(form: NgForm): void {
    this._apiService.postTypeRequest('login', form.value).subscribe((res: any) => {
      if (res.status) { 
        this._localStorageService.setDataInLocalStorage('userData', JSON.stringify(res.data));  
        this._localStorageService.setDataInLocalStorage('token', res.token);  
        this._router.navigate(['']);
      }
    })
  };

  public logout(): void {
    this._apiService.getTypeRequest('logout')
    .subscribe((result) => {
      this._localStorageService.clearStorage()
      this._router.navigate(['']);
    })
  };

  private _isUserLogin(): void {
    if(this._localStorageService.getUserDetails() != null){
      this.isLogin = true;
    }
  };

}
