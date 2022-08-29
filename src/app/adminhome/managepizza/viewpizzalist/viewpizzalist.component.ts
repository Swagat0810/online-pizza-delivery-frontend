import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pizza } from 'src/app/models/pizza';
import { PizzaService } from 'src/app/pizza.service';

@Component({
  selector: 'app-viewpizzalist',
  templateUrl: './viewpizzalist.component.html',
  styleUrls: ['./viewpizzalist.component.css']
})
export class ViewpizzalistComponent implements OnInit {
  pizzas: Pizza[] = [];
  constructor(private pizzaservice:PizzaService, private router:Router) { }

  ngOnInit(): void {
    this.getPizzaList();
  }
  
  getPizzaList(){
    this.pizzaservice.getPizzaList().subscribe(data=>{
      this.pizzas=data;
    })
  }
  updatePizza(pizza:Pizza){
    this.router.navigate(['adminhome/managepizza/updatepizza',pizza])
  }
  deletePizza(pizzaId:number){
    this.pizzaservice.deletePizza(pizzaId).subscribe(data=>{
      console.log(data);
     // this.router.navigateByUrl('adminhome/managepizza')
      this.getPizzaList();
      
    })
  }

}
