import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { ApiService } from '../../../services/api.service';
import { LocalStorageService } from '../../../services/local-storage.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  exportAs: 'ngForm',
})
export class RegisterComponent implements OnInit {

  public isLogin: boolean = false;
  public errorMessage: any;

  constructor(
    private _apiService: ApiService, 
    private _localStorageService: LocalStorageService, 
    private _router: Router
  ) { }

  public ngOnInit(): void {
    this._isUserLogin();
  };

  public onSubmit(form: NgForm): void {
    this._apiService.postTypeRequest('register', form.value).subscribe((result) => {
      if(result.status) {
        console.log(result);
        this._localStorageService.setDataInLocalStorage('userData', JSON.stringify(result.data));
        this._localStorageService.setDataInLocalStorage('token', result.token);
        this._router.navigate(['login']);
      } else {
        console.log(result.message);
      }
    })
  };

  private _isUserLogin(): void {
    if(this._localStorageService.getUserDetails() != null){
      this.isLogin = true;
    }
  };

}
