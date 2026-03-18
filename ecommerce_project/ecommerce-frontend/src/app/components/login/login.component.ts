import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginData = {
    username: '',
    password: ''
  };

  constructor(private http: HttpClient, private router: Router) {}

  login() {

    this.http.post('https://localhost:44392/api/auth/login', this.loginData)
      .subscribe({
        next: (res: any) => {

          console.log(res);

          alert("Login Successful");

          localStorage.setItem('username',this.loginData.username);

          this.router.navigate(['/dashboard']);

        },
        error: (err) => {

          alert("Login Failed");

        }
      });

  }

}