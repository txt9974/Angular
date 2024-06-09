import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import axios from 'axios';
import { HttpClient } from '@angular/common/http';
import { User } from '../../interfaces/User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  users: User[] = [];
  // userData: any;
  // url: string = 'http://localhost:3000/users';
  // constructor(private http: HttpClient) {}
  userForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });
  async ngOnInit() {
    // this.http.get(this.url).subscribe((data) => {
    //   this.userData = data;
    // });
  }
  // constructor(private http: HttpClient) {}
  onSubmit() {
    if (this.userForm.invalid) {
      return;
    }
    console.log(this.userForm.value);
    axios
      .post('http://localhost:3000/register', this.userForm.value)
      .then((data) => {
        console.log(data);
      });
  }
  refresh(): void {
    alert('User Registered Successfully!');
    window.location.href = '/login';
  }
}
