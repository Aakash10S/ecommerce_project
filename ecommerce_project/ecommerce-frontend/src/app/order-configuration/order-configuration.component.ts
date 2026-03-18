import { Component, OnInit } from '@angular/core';
import { RouterModule, } from '@angular/router';
import { CartService } from '../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-configuration',
  standalone:true,
  imports: [RouterModule],
  templateUrl: './order-configuration.component.html',
  styleUrls: ['./order-configuration.component.css']
})
export class OrderConfigurationComponent {

  orderId: string = '';

  constructor(
    public cartService: CartService,
    private router: Router
  ) {}

  ngOnInit() {

    this.orderId = 'ORD-' + Math.floor(Math.random() * 1000000);

    const order = {
      id: 'ORD-' + Math.floor(Math.random()*1000000),
      items: this.cartService.getItems(),
      total: this.cartService.getTotal(),
      date: new Date()
    };

    let orders = JSON.parse(localStorage.getItem('orders') || '[]');

    orders.push(order);

    localStorage.setItem('orders', JSON.stringify(orders));

    this.cartService.clearCart();

  }

}