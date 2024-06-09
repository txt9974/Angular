import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
  checkRole = (): boolean => {
    let check = false;
    const token: any = localStorage.getItem('accessToken') as any;
    try {
      const decoded: any = jwtDecode(token);
      if (decoded.exp > Date.now() / 1000 && decoded.sub === '1') {
        check = true;
      }
    } catch (error) {
      console.log(error);
    }
    return check;
  };
}
