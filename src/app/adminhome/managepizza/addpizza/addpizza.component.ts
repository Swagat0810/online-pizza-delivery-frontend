import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pizza } from 'src/app/models/pizza';
import { PizzaService } from 'src/app/pizza.service';

@Component({
  selector: 'app-addpizza',
  templateUrl: './addpizza.component.html',
  styleUrls: ['./addpizza.component.css']
})
export class AddpizzaComponent implements OnInit {

  public pizza:Pizza=new Pizza(0,"","","",0,"");
  constructor(public pizzaservice:PizzaService,private route:Router) { }

  ngOnInit(): void {
  }

  submit():any{
    this.pizzaservice.registerPizza(this.pizza).subscribe(f=>this.pizza=f);
    this.route.navigate(["/adminhome/managepizza"]);
  }


}
