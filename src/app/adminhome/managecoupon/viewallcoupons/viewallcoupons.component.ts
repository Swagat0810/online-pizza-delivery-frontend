import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CouponService } from 'src/app/coupon.service';
import { Coupan } from 'src/app/models/coupan';

@Component({
  selector: 'app-viewallcoupons',
  templateUrl: './viewallcoupons.component.html',
  styleUrls: ['./viewallcoupons.component.css']
})
export class ViewallcouponsComponent implements OnInit {

  coupons:Coupan[]=[];
  constructor(public couponservice:CouponService,private router:Router) { }
  ngOnInit(): void {
    this.getCouponList();
  }

  getCouponList(){
    this.couponservice.getCouponList().subscribe(data=>{
      this.coupons=data;
    })
  }
  updateCoupon(coupon:Coupan){
    this.router.navigate(['adminhome/managecoupon/updatecoupon',coupon])
  }
  deleteCoupon(coupanId:number){
    this.couponservice.deleteCoupon(coupanId).subscribe(data=>{
      console.log(data);
     // this.router.navigateByUrl('adminhome/managepizza')
      this.getCouponList();
      
    })
  }

}
