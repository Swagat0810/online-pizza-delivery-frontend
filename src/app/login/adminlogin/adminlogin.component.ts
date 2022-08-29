import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/admin.service';
import { Admin } from 'src/app/models/admin';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  admin:Admin=new Admin("","");
  constructor(private adminService:AdminService,private router:Router) { }

  ngOnInit(): void {
  }

  onAdminLogin(){
    console.log(this.admin);
    this.adminlogin();
  }

  adminlogin(){
    this.adminService.adminlogin(this.admin)
    .subscribe(data =>{
      console.log(data);
      this.goToHome();
    },
    error=>console.log(error))
  }

  goToHome(){
    this.router.navigate(['/adminhome'])
  }

}
