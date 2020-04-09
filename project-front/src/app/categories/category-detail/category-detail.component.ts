import { Component, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from "rxjs/operators";

import { ShopService } from 'src/app/shop.service';
import { Category } from '../category';
import { Observable } from 'rxjs';
import { Product } from 'src/app/products/product';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css']
})
export class CategoryDetailComponent implements OnInit {
 
  products$: Observable<Product[]>;
  categoryName: string;

  constructor(
    private shopService:ShopService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.products$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.shopService.getProductsByCategoryIdFromAllProducts(+params.get('id')))
    );
  }
  

}
