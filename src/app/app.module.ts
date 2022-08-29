import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerRegisterComponent } from './customer-register/customer-register.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { CustomerloginComponent } from './login/customerlogin/customerlogin.component';
import { AdminloginComponent } from './login/adminlogin/adminlogin.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { ManagecustomerComponent } from './adminhome/managecustomer/managecustomer.component';
import { ManagepizzaComponent } from './adminhome/managepizza/managepizza.component';
import { ManagecouponComponent } from './adminhome/managecoupon/managecoupon.component';
import { ManageorderComponent } from './adminhome/manageorder/manageorder.component';
import { AddpizzaComponent } from './adminhome/managepizza/addpizza/addpizza.component';
import { ViewpizzalistComponent } from './adminhome/managepizza/viewpizzalist/viewpizzalist.component';
import { ViewpizzatypeComponent } from './adminhome/managepizza/viewpizzatype/viewpizzatype.component';

import { UpdatepizzaComponent } from './adminhome/managepizza/updatepizza/updatepizza.component';
import { FilterpizzaComponent } from './adminhome/managepizza/filterpizza/filterpizza.component';
import { AddcouponComponent } from './adminhome/managecoupon/addcoupon/addcoupon.component';
import { ViewallcouponsComponent } from './adminhome/managecoupon/viewallcoupons/viewallcoupons.component';
import { UpdatecouponComponent } from './adminhome/managecoupon/updatecoupon/updatecoupon.component';
import { HomeComponent } from './home/home.component';
import { CustomerhomeComponent } from './customerhome/customerhome.component';
import { UpdatecustomerComponent } from './customerhome/updatecustomer/updatecustomer.component';




@NgModule({
  declarations: [
    AppComponent,
    CustomerRegisterComponent,
    LoginComponent,
    CustomerloginComponent,
    AdminloginComponent,
    AdminhomeComponent,
    ManagecustomerComponent,
    ManagepizzaComponent,
    ManagecouponComponent,
    ManageorderComponent,
    AddpizzaComponent,
    ViewpizzalistComponent,
    ViewpizzatypeComponent,
 
    UpdatepizzaComponent,
    FilterpizzaComponent,
    AddcouponComponent,
    ViewallcouponsComponent,
    UpdatecouponComponent,
    HomeComponent,
    CustomerhomeComponent,
    UpdatecustomerComponent
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
