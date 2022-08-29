import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { CustomerService } from '../customer.service';
import { Customer } from '../models/customer';
import { User } from '../models/user';

@Component({
  selector: 'app-customer-register',
  templateUrl: './customer-register.component.html',
  styleUrls: ['./customer-register.component.css']
})
export class CustomerRegisterComponent implements OnInit {
  user:User=new User(0,"","");
  customer:Customer=new Customer(0,0,"","","",this.user);
  constructor(private customerservice:CustomerService,private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.customer);
    this.saveCustomer();
  }

  saveCustomer(){
    this.customerservice.customerRegister(this.customer).subscribe(data =>{
      console.log(data);
      this.goToHome();
      alert("Customer details registered successfully");
    },
    error=>console.log(error))
    //alert("User already exists ");
  }

  goToHome(){
    this.router.navigate(['/'])
  }

}
