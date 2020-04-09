import { InMemoryDbService } from 'angular-in-memory-web-api';

import { CATEGORIES } from './categories/mock-categories'
import { Category } from './categories/category';
import { Product } from "./products/product";
import { ALL_PRODUCTS } from "./products/mock-products";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const categories: Category[] = CATEGORIES;
    const products: Product[] = ALL_PRODUCTS;
    return {categories, products};
  }
  
  genId<T extends Category | Product>(myTable: T[]): number {
    return myTable.length > 0 ? Math.max(...myTable.map(t => t.id)) + 1 : 11;
  }
  
}