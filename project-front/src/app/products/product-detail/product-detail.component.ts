import { Component, OnInit } from '@angular/core';
import { ShopService } from 'src/app/shop.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product;
  
  constructor(
    private shopService:ShopService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getProductById();
  }

  getProductById(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.shopService.getProductById(id)
      .subscribe(product => this.product = product);
  }
  
}
