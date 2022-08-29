import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pizza } from 'src/app/models/pizza';
import { PizzaService } from 'src/app/pizza.service';

@Component({
  selector: 'app-updatepizza',
  templateUrl: './updatepizza.component.html',
  styleUrls: ['./updatepizza.component.css']
})
export class UpdatepizzaComponent implements OnInit {
  pizzaId!:number
  pizza:Pizza=new Pizza(0,"","","",0,"");
  constructor(private pizzaservice:PizzaService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.pizzaId=this.route.snapshot.params['pizzaId']
    this.pizzaservice.getPizzaById(this.pizzaId).subscribe(data=>{
      this.pizza=data
    })
  }
  submit(){
    this.pizzaservice.updatePizza(this.pizza).subscribe(data=>{
      this.GoToPizzaList();
    },error=>console.log(error))
  }
  GoToPizzaList(){
    this.router.navigate(['/adminhome/managepizza/viewpizzalist'])
  }

}
