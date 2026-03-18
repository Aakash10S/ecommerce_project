import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginUrl = 'https://localhost:44392/api/auth/login';  // your login endpoint
  private usersUrl = 'https://localhost:44392/api/auth/users';        // your users endpoint

  constructor(private http: HttpClient) {}

  // Login method
  login(username: string, password: string): Observable<any> {
    return this.http.post(this.loginUrl, {
      Username: username,
      Password: password
    });
  }

  // Get all users (protected API)
  getUsers(): Observable<any> {
    const token = localStorage.getItem('token');  // token stored after login
    return this.http.get(this.usersUrl, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }
}