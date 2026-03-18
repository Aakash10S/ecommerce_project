import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../services/cart.service';
import { OrderService } from '../services/order.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  cartItems: any[] = [];

  constructor(
    public cartService: CartService,
    private orderService: OrderService,
    private router: Router,
    private http: HttpClient
  ) {
    this.cartItems = this.cartService.getItems();
  }

  removeFromCart(index: number) {
    this.cartItems.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(this.cartItems));
  }

  getTotal() {
    return this.cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }

  placeOrder() {

    const order = {
      items: this.cartItems,
      total: this.getTotal()
    };

    this.orderService.placeOrder(order).subscribe({
      next: (res) => {
        alert("Order placed successfully 🎉");

        this.cartItems = [];
        localStorage.removeItem('cart');

        this.router.navigate(['/products']);
      },
      error: (err) => {
        console.error("Order failed", err);
      }
    });
  }
checkout() {

  this.router.navigate(['/order-confirmation'])

  const items = this.cartService.getItems();

  if(items.length === 0){
    alert("Cart is empty");
    return;
  }

  const item = items[0];

  const order = {
    ProductName: item.name,
    Price: item.price,
    Quantity: item.quantity,
    Total: item.price * (item.quantity ?? 1),
    OrderDate: new Date()
  };

  this.http.post('https://localhost:44392/api/order', order)
  .subscribe({
    next: (res:any) => {
      alert(res.message);
      this.cartService.clearCart();
    },
    error: (err) => {
      console.error("Order failed ❌", err);
      alert("Order failed");
    }
  });

}
goToCheckout(){
  this.router.navigate(['/checkout'])
}

}