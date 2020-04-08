import { Component, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from "rxjs/operators";

import { ShopService } from 'src/app/shop.service';
import { Category } from './category';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css']
})
export class CategoryDetailComponent implements OnInit {
 
  category$: Observable<Category>;

  constructor(
    private shopService:ShopService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.category$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.shopService.getProductsByCategoryId(+params.get('id')))
    );
  }

}
