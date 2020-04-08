import { Injectable } from '@angular/core';

import { Observable, of } from "rxjs";

import { Category } from "./categories/category-detail/category";
import { Product } from "./products/product";
import { CATEGORIES } from "./categories/category-detail/mock-categories";
import { ALL_PRODUCTS } from "./products/mock-products";

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  products:Product[] = ALL_PRODUCTS;
  categories:Category[] = CATEGORIES;

  getProducts(): Observable<Product[]> {
    return of (this.products);
  }

  getCategories(): Observable<Category[]> {
    return of (this.categories);
  }

  getProductsByCategoryId(categoryId: number): Observable<Category> {
    return of(this.categories.find(category => category.id === categoryId));
  }
  getProductById(productId: number): Observable<Product> {
    return of(this.products.find(product => product.id === productId));
  }

  constructor() { }
}
