import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pizza } from 'src/app/models/pizza';
import { PizzaService } from 'src/app/pizza.service';

@Component({
  selector: 'app-viewpizzatype',
  templateUrl: './viewpizzatype.component.html',
  styleUrls: ['./viewpizzatype.component.css']
})
export class ViewpizzatypeComponent implements OnInit {
 
  constructor(private pizzaservice:PizzaService) { }
  pizzaType : string="";
  pizzaName: string="";
  viewPizza: any;
  viewPizzaList: any;
  pizzaCost: number=0;

  ngOnInit(): void {
    
  }

  fetchData() 
  {
    console.log(this.pizzaType);
    this.pizzaservice.pizzaDetails({pizzaType : this.pizzaType}).subscribe(responseData=>{
      console.log(responseData);
      this.viewPizza=responseData;
      console.log(this.viewPizza,responseData.pizzaDetail);
    })
  }


}


