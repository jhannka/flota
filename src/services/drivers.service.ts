import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Drivers } from 'src/app/models/Drivers';

import { global } from './global';

@Injectable()
export class DriversService {
  public url: string;

  constructor(public _http: HttpClient) {
    this.url = global.url;
  }

  test() {
    return 'Aquii';
  }

  newDriver(f:Drivers): Observable<any> {
    let json = JSON.stringify(Drivers);
    let params;

    let headers = new HttpHeaders().set('Content-Type', 'application/raw')

    return this._http.post(this.url + 'new_driver', params,{headers:headers});
  }
}
