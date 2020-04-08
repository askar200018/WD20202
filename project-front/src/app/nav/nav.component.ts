import { Component, OnInit } from '@angular/core';
import { Category } from '../categories/category-detail/category';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  categories:Category[];

  constructor(private shopService:ShopService) { }

  ngOnInit(): void {
    this.getCategories();
  }
  getCategories(): void {
    this.shopService.getCategories()
      .subscribe(categories => this.categories = categories);
  }
}
