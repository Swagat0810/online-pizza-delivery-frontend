import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/customer.service';
import { Customer } from 'src/app/models/customer';

@Component({
  selector: 'app-managecustomer',
  templateUrl: './managecustomer.component.html',
  styleUrls: ['./managecustomer.component.css']
})
export class ManagecustomerComponent implements OnInit {

  customers:Customer[]=[]
  constructor(private customerservice:CustomerService,private router:Router) { }

  ngOnInit(): void {
    this.getCustomerList();
  }
  getCustomerList(){
    this.customerservice.getCustomerList().subscribe(data=>{
      this.customers=data;
    })
  }
  deleteCustomer(customerId:number){
    this.customerservice.deleteCustomer(customerId).subscribe(data=>{
      alert('Customer removed');
      console.log(data);
     // this.router.navigateByUrl('adminhome/managepizza')
      this.getCustomerList();
      
    })
  }
}
