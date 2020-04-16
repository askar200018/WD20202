import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CompanyComponent } from './company/company.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms'
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { CompanyDetailComponent } from './company-detail/company-detail.component';
import { AuthInterceptor } from "./auth.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    CompanyComponent,
    CompanyDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
