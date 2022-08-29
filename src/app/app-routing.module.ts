import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AddcouponComponent } from './adminhome/managecoupon/addcoupon/addcoupon.component';
import { ManagecouponComponent } from './adminhome/managecoupon/managecoupon.component';
import { UpdatecouponComponent } from './adminhome/managecoupon/updatecoupon/updatecoupon.component';
import { ViewallcouponsComponent } from './adminhome/managecoupon/viewallcoupons/viewallcoupons.component';
import { ManagecustomerComponent } from './adminhome/managecustomer/managecustomer.component';
import { ManageorderComponent } from './adminhome/manageorder/manageorder.component';
import { AddpizzaComponent } from './adminhome/managepizza/addpizza/addpizza.component';
import { FilterpizzaComponent } from './adminhome/managepizza/filterpizza/filterpizza.component';
import { ManagepizzaComponent } from './adminhome/managepizza/managepizza.component';
import { UpdatepizzaComponent } from './adminhome/managepizza/updatepizza/updatepizza.component';
import { ViewpizzalistComponent } from './adminhome/managepizza/viewpizzalist/viewpizzalist.component';
import { ViewpizzatypeComponent } from './adminhome/managepizza/viewpizzatype/viewpizzatype.component';
import { CustomerRegisterComponent } from './customer-register/customer-register.component';
import { CustomerhomeComponent } from './customerhome/customerhome.component';

import { UpdatecustomerComponent } from './customerhome/updatecustomer/updatecustomer.component';
import { HomeComponent } from './home/home.component';

import { AdminloginComponent } from './login/adminlogin/adminlogin.component';
import { CustomerloginComponent } from './login/customerlogin/customerlogin.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: 'customer-register' , component: CustomerRegisterComponent},
  {path: 'login' , component: LoginComponent},
  {path: 'login/customerlogin' , component:CustomerloginComponent},
  {path: 'login/adminlogin' , component:AdminloginComponent},
  {path: 'adminhome', component:AdminhomeComponent},
  {path: 'adminhome/managecoupon',component:ManagecouponComponent},
  {path: 'adminhome/managecustomer',component:ManagecustomerComponent},
  {path: 'adminhome/manageorder', component:ManageorderComponent},
  {path: 'adminhome/managepizza', component:ManagepizzaComponent},
  {path: 'adminhome/managepizza/addpizza', component:AddpizzaComponent},
  {path: 'adminhome/managepizza/viewpizzalist',component:ViewpizzalistComponent},
  {path: 'adminhome/managepizza/viewpizzatype',component:ViewpizzatypeComponent},
  {path: 'adminhome/managepizza/updatepizza', component:UpdatepizzaComponent},
  {path: 'adminhome/managepizza/filterpizza', component:FilterpizzaComponent},
  {path: 'adminhome/managecoupon/addcoupon', component:AddcouponComponent},
  {path: 'adminhome/managecoupon/viewallcoupons', component:ViewallcouponsComponent},
  {path: 'adminhome/managecoupon/updatecoupon', component:UpdatecouponComponent},
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'customerhome',component:CustomerhomeComponent},
  {path:'customerhome/updatecustomer',component:UpdatecustomerComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
