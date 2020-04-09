import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { ShopService } from 'src/app/shop.service';
import { AuthService } from "src/app/auth.service";
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  update:Boolean = false;
  product: Product;
  
  constructor(
    private shopService:ShopService,
    private route: ActivatedRoute,
    private location: Location,
    public authService:AuthService,
  ) { }

  ngOnInit(): void {
    this.getProductById();
  }

  getProductById(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.shopService.getProductById(id)
      .subscribe(product => this.product = product);
  }
  delete(product: Product):void {
    this.shopService.deleteProduct(product).subscribe();
    this.goBack();
  }
  goBack(): void {
    this.location.back();
  }
  addProduct(product:Product) {
    this.shopService.addCartProduct(product);
  }
}
