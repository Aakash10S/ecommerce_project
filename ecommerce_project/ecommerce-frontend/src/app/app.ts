import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, NavbarComponent, CommonModule],
  templateUrl: './app.html'
})
export class AppComponent {

  username: string = '';

  ngOnInit(){
    this.username = localStorage.getItem('username') || '';
  }

  constructor(public router: Router) {}

  showNavbar(): boolean {
    const user = localStorage.getItem('username');
    return !!user && this.router.url !== '/' && this.router.url !== '/register';
  }
}