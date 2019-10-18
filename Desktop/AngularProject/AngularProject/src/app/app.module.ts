// tslint:disable-next-line:import-spacing
import { NgModule }       from '@angular/core';
// tslint:disable-next-line:import-spacing
import { BrowserModule }  from '@angular/platform-browser';
// tslint:disable-next-line:import-spacing
import { FormsModule }    from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchComponent } from './search/search.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
/*
import { ProductListComponent } from './product-list/product-list.component';
*/
import { ProductarrayComponent } from './productarray/productarray.component';
import { UserCartComponent } from './user-cart/user-cart.component';
import { FooterComponent } from './footer/footer.component';
import { TestComponent } from './test/test.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {ProductDetailsComponent} from './product-details/product-details.component';
import {AuthenticationService} from './authentication.service';
import {AuthGuardService} from './auth-guard.service';
import { AddproductComponent } from './addproduct/addproduct.component';
// import { OrderhistoryComponent } from './orderhistory/orderhistory.component';
// import {ProductListComponent} from './product-list/product-list.component';
// imports: [
// BrowserModule,
// AppRoutingModule,
// ProductListComponent
// ];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchComponent,
    SignupComponent,
    HomeComponent,
    LoginComponent,
    ProductarrayComponent,
    UserCartComponent,
    FooterComponent,
    ProductDetailsComponent,
    TestComponent,
    AddproductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [AuthenticationService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
