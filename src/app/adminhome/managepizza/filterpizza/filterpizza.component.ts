import { Component, OnInit } from '@angular/core';
import { PizzaService } from 'src/app/pizza.service';

@Component({
  selector: 'app-filterpizza',
  templateUrl: './filterpizza.component.html',
  styleUrls: ['./filterpizza.component.css']
})
export class FilterpizzaComponent implements OnInit {

  constructor(private pizzaservice:PizzaService) { }
  min:number=0;
  max:number=0;
  pizzaType : string="";
  pizzaName: string="";
  viewPizza: any;
  viewPizzaList: any;
  pizzaCost: number=0;

  ngOnInit(): void {
  }

  fetchData() 
  {
    console.log(this.min,this.max);
    this.pizzaservice.pizzaFilter({min : this.min},{max:this.max}).subscribe(responseData=>{
      console.log(responseData);
      this.viewPizza=responseData;
      console.log(this.viewPizza,responseData.FilterPizza);
    })
  }
}
