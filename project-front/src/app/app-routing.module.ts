import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { ProductsComponent } from './products/products.component';
import { CategoryDetailComponent } from './categories/category-detail/category-detail.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';

const routes: Routes = [
  { path: 'categories', component: CategoriesComponent },
  { path: 'products', component: ProductsComponent},
  { path: '', redirectTo: '/categories', pathMatch: 'full' },
  { path: 'categories/:id', component: CategoryDetailComponent },
  { path: 'products/:id', component: ProductDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }