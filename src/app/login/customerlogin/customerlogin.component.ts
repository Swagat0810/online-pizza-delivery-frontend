import { Component, OnInit, Optional } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CustomerService } from 'src/app/customer.service';
import { Customer } from 'src/app/models/customer';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/user.service';


@Component({
  selector: 'app-customerlogin',
  templateUrl: './customerlogin.component.html',
  styleUrls: ['./customerlogin.component.css']
})
export class CustomerloginComponent implements OnInit {
  
  user:User=new User(0,"","");
  constructor(private customerservice:CustomerService,private userservice:UserService,private router:Router) { }
  customerlist:Customer[]=[]
 // customer!:Customer;
 custId:number=0
  ngOnInit(): void {
    this.getCustomerList();
  }
  getCustomerList(){
    this.customerservice.getCustomerList().subscribe(data=>{
      this.customerlist=data;
    })
  }
  onCustomerLogin(){
    console.log(this.user);
    this.customerlogin();
  }

  customerlogin(){
    let user={

      "userName": this.user.userName,
      "userPassword": this.user.userPassword
      
    }
    this.userservice.customerlogin(this.user)
    .subscribe(data =>{
      console.log(data);
      //this.goToHome();
      for (let i=0;i<this.customerlist.length;i++){
        if(this.customerlist[i].user.userName==this.user.userName &&
          this.customerlist[i].user.userPassword==this.user.userPassword){
          this.custId=this.customerlist[i].customerId;
        }
      }
      console.log('custId:',this.custId);
      
        sessionStorage.setItem("userName",this.user.userName);
      sessionStorage.setItem("userPassword",this.user.userPassword);  
      sessionStorage.setItem("custId",this.custId.toString());
      this.goToHome();
  
      
      
    },
    error=>console.log(error)
  )}

  goToHome(){
    this.router.navigate(['/customerhome'])
  }


}
