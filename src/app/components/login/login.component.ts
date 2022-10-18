import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from 'src/services/users.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService],
})
export class LoginComponent implements OnInit {
  public status: string;
  public form: FormGroup;
  public token;

  constructor(
    private _userService: UserService,
    private formBuilder: FormBuilder,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    this.status = '';
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: [''],
      password: [''],
    });

    this.logout();
  }

  login() {
    this._userService
      .post('http://127.0.0.1:8000/api/login_check', {
        email: this.form.value.email,
        password: this.form.value.password,
      })
      .subscribe(
        (response) => {
          this.token = response;
          localStorage.setItem('token', this.token);
          this._router.navigate(['/inicio']);
        },
        (error) => {
          this.status = 'error';
          console.log(error);
        }
      );
  }

  logout() {
    this._route.params.subscribe((params) => {
      let sure = +params['sure'];
      if (sure == 1) {
        localStorage.removeItem('token');
        this.token = null;
        this._router.navigate(['/login']);
      }
    });
  }
}
