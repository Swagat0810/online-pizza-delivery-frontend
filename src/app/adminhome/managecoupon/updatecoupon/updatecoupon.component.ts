import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CouponService } from 'src/app/coupon.service';
import { Coupan } from 'src/app/models/coupan';

@Component({
  selector: 'app-updatecoupon',
  templateUrl: './updatecoupon.component.html',
  styleUrls: ['./updatecoupon.component.css']
})
export class UpdatecouponComponent implements OnInit {
  coupanId!:number;
  public coupon:Coupan=new Coupan(0,"",0,"","");
  constructor(public couponservice:CouponService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.coupanId=this.route.snapshot.params['coupanId']
    this.couponservice.getCouponById(this.coupanId).subscribe(data=>{
      this.coupon=data
    })
  }

  submit(){
    this.couponservice.updateCoupon(this.coupon).subscribe(data=>{
      this.GoToCouponList();
    },error=>console.log(error))
  }
  GoToCouponList(){
    this.router.navigate(['/adminhome/managecoupon/viewallcoupons'])
  }


}
