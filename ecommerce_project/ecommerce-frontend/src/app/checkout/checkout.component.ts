import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CartService } from '../services/cart.service';
import { Router } from '@angular/router';

@Component({
 selector: 'app-checkout',
 standalone: true,
 imports: [FormsModule],
 templateUrl: './checkout.component.html',
 styleUrl: './checkout.component.css'
})
export class CheckoutComponent {

address = '';
payment = '';

constructor(
 private cartService: CartService,
 private router: Router
){}

placeOrder(){

 const order = {
  id: 'ORD-' + Math.floor(Math.random()*100000),
  items: this.cartService.getItems(),
  total: this.cartService.getTotal(),
  address: this.address,
  payment: this.payment,
  status: 'Placed',
  date: new Date()
 };

 let orders = JSON.parse(localStorage.getItem('orders') || '[]');

 orders.push(order);

 localStorage.setItem('orders', JSON.stringify(orders));

 this.cartService.clearCart();

 alert("Order Placed Successfully");

 this.router.navigate(['/order-confirmation']);

}

}