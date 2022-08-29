import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Coupan } from './models/coupan';

@Injectable({
  providedIn: 'root'
})
export class CouponService {

  constructor(private h:HttpClient) { }

  public url: string = 'http://localhost:8085/'

  registerCoupon(coupon:Coupan):Observable<any>{
    return this.h.post(this.url +"savecoupon",coupon)
  }

  getCouponList(): Observable<Coupan[]>{
    return this.h.get<Coupan[]>(this.url+"showcouponlist")
  }


  getCouponById(coupanId:number): Observable<Coupan>{
    return this.h.get<Coupan>(this.url+"showcoupon/"+coupanId)
  }
  updateCoupon(coupon:Coupan): Observable<Object>{
    return this.h.put(this.url+"updatecoupon",coupon)
  }
  deleteCoupon(coupanId:number): Observable<Object>{
    return this.h.delete(this.url+"deletecoupon/"+coupanId)  
  }
}
