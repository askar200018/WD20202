import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyComponent } from "./company/company.component";
import { CompanyDetailComponent } from "./company-detail/company-detail.component";

const routes: Routes = [
  { path: '', component: CompanyComponent },
  { path: 'company/:id', component: CompanyDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }