import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from 'src/app/customer.service';
import { Customer } from 'src/app/models/customer';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-updatecustomer',
  templateUrl: './updatecustomer.component.html',
  styleUrls: ['./updatecustomer.component.css']
})
export class UpdatecustomerComponent implements OnInit {

  customerId!:number;
   user:User=new User(0,"","");
  customer:Customer=new Customer(0,0,"","","",this.user);

  constructor(private customerservice:CustomerService,private route:ActivatedRoute,private router:Router) { 
    console.log(sessionStorage.getItem("custId"));
      
  }
 

  ngOnInit(): void {
     this.customerId=this.route.snapshot.params['customerId']
       this.customerservice.getCustomerById(this.customerId).subscribe(data=>{
         this.customer=data
       })

    
  }
  submit(){
    this.customerservice.updateCustomer(this.customer).subscribe(data=>{
      this.GoToCustomerHome();
    },error=>console.log(error))
  }
  GoToCustomerHome(){
    this.router.navigate(['/customerhome'])
  }

}
