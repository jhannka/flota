import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public token;
  constructor(private http: HttpClient) {}

  public post(url: string, body) {
    return this.http.post(url, body);
  }

  getToken() {
    let token = localStorage.getItem('token');

    if (token && token != 'undefined') {
      this.token = token;
    } else {
      this.token = null;
    }
    return token;
  }
}
