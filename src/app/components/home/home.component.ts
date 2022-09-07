import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public protectedData: any;
  public loading: boolean = false;

  constructor(
    private _apiService: ApiService, 
  ) { }

  public ngOnInit(): void {
    this._getUser();
  }

  private _getUser (): void {
    this._apiService.getTypeRequest('user').subscribe((result: any) => {
      this.protectedData = result;
    });
  };

}
