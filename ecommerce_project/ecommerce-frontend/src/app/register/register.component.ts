import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule,RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  registerData = {
    Username: '',
    Password: ''
  };

  constructor(private http: HttpClient, private router: Router) {}

  register() {
      

    this.http.post('https://localhost:44392/api/auth/register', this.registerData)
      .subscribe({
        next: (res) => {

          console.log("Registrationb successful",res);

          alert("Registration Successful");

          this.router.navigate(['/']);

        },
        error: (err) => {
          
          console.log(err);
          alert("Registration Failed");

        }
      });

  }

}