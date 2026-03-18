import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../services/product.service';
import { CartService } from '../services/cart.service';
import { Product } from '../models/product';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: any[] = [];
  filteredProducts: any[] = [];
  searchText: string = '';
  errorMessage: string = '';

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private cdr:ChangeDetectorRef,
    private http:HttpClient
  ) {}

  ngOnInit(): void {
    this.loadProducts(); // ✅ load products automatically when page loads
  }

  loadProducts() {
    this.http.get<any[]>('https://localhost:44392/api/products')
      .subscribe(data => {
        this.products = data;
        this.filteredProducts = data;
        this.cdr.detectChanges();
      });
  }
  searchProducts() {
    const text = this.searchText.toLowerCase();

    this.filteredProducts = this.products.filter(product =>
      product.name.toLowerCase().includes(text)
    );
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(product);
    alert(`Product "${product.name}" added to cart 🛒`);
  }
}