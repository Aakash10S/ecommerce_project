import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; 
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    RouterLink
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  users: any[] = [];

  constructor(private authService: AuthService) {}

  loadUsers() {
    this.authService.getUsers().subscribe({
      next: (res: any) => {
        console.log("Users fetched 🔥", res);
        this.users = res;
      },
      error: (err) => {
        console.error("Failed to fetch users ❌", err);
      }
    });
  }
}