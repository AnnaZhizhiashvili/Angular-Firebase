import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {environment} from "../environments/environment.development";
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase} from "@angular/fire/database";
import {NavbarComponent} from "./navbar/navbar.component";
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideDatabase(() => {
      return getDatabase();
    }),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    NavbarComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
