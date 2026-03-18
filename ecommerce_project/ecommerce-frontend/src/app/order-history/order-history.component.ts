import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-history',
  imports:[CommonModule],
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistory implements OnInit {

  orders: any[] = [];

  ngOnInit(): void {

    const savedOrders = localStorage.getItem('orders');

    if (savedOrders) {
      this.orders = JSON.parse(savedOrders);
    }

  }

}