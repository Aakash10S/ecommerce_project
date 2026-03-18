export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;    // Keep this casing
  stock: number;       // Added this
   // Added this as optional for cart usage
}