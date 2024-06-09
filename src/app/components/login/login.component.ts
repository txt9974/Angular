import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import axios from 'axios';
import { HttpClient } from '@angular/common/http';
import { User } from '../../interfaces/User';
import { jwtDecode } from 'jwt-decode';
import { UserService } from '../../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  users: User[] = [];
  url: string = 'http://localhost:3000';
  constructor(private http: HttpClient) {}
  checking = inject(UserService);
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });
  router = new Router();
  async ngOnInit() {
    // this.http.get(this.url).subscribe((data) => {
    //   this.userData = data;
    // });
    if (this.checking.checkRole()) {
      this.router.navigate(['/admin']);
    }
  }
  // constructor(private http: HttpClient) {}
  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }
    console.log(this.loginForm.value);

    this.http.post(this.url + '/login', this.loginForm.value).subscribe(
      (data: any) => {
        console.log(data);
        localStorage.setItem('accessToken', data.accessToken);
        alert('Login successful');
        this.router.navigate(['/admin']);
      },
      (error) => alert(error.error)
    );
  }
}
