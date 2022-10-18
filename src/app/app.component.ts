import { Component,OnInit,DoCheck } from '@angular/core';
import { UserService } from 'src/services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService],
})
export class AppComponent implements OnInit, DoCheck {
  title = 'flota';
  public token;
  constructor(private _userService: UserService) {}

  ngOnInit(): void {
    
  }

  ngDoCheck(): void {
    this.cargarToken();
  }

  cargarToken() {
    this.token = this._userService.getToken();
  }
}
