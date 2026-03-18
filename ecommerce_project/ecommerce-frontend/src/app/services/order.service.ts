import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private apiUrl = 'https://localhost:44392/api/order';

  constructor(private http: HttpClient) {}

  placeOrder(order: any): Observable<any> {
    return this.http.post(this.apiUrl, order);
  }

  getOrders(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}