import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CouponService } from 'src/app/coupon.service';
import { Coupan } from 'src/app/models/coupan';

@Component({
  selector: 'app-addcoupon',
  templateUrl: './addcoupon.component.html',
  styleUrls: ['./addcoupon.component.css']
})
export class AddcouponComponent implements OnInit {
  public coupon:Coupan=new Coupan(0,"",0,"","");
  constructor(public couponservice:CouponService,private route:Router) { }

  ngOnInit(): void {
  }

  
  submit():any{
    this.couponservice.registerCoupon(this.coupon).subscribe(f=>this.coupon=f);
    this.route.navigate(["/adminhome/managecoupon"]);
  }


}
