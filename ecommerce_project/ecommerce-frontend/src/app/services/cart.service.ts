import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItems: any[] = [];

  constructor() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      this.cartItems = JSON.parse(savedCart);
    }
  }

  private saveCart() {
    localStorage.setItem('cart', JSON.stringify(this.cartItems));
  }

  getItems() {
    return this.cartItems;
  }

  getCartCount() {
    return this.cartItems.reduce((total, item) => {
      return total + item.quantity;
    }, 0);
  }

  addToCart(product: any) {
    const existing = this.cartItems.find(p => p.id === product.id);

    if (existing) {
      existing.quantity += 1;
    } else {
      this.cartItems.push({ ...product, quantity: 1 });
    }

    this.saveCart();
  }

  increaseQuantity(productId: number) {
    const item = this.cartItems.find(p => p.id === productId);
    if (item) {
      item.quantity += 1;
      this.saveCart();
    }
  }

  decreaseQuantity(productId: number) {
    const item = this.cartItems.find(p => p.id === productId);
    if (item) {
      if (item.quantity > 1) {
        item.quantity -= 1;
      } else {
        this.removeFromCart(productId);
        return;
      }
      this.saveCart();
    }
  }

  removeFromCart(productId: number) {
    this.cartItems = this.cartItems.filter(p => p.id !== productId);
    this.saveCart();
  }

  getTotal() {
    return this.cartItems.reduce((total, item) => {
      return total + (item.price * item.quantity);
    }, 0);
  }

  clearCart() {
    this.cartItems = [];
    this.saveCart();
  }
}