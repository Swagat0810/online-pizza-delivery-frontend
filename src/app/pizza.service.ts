import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Observable } from 'rxjs';
import { Pizza } from './models/pizza';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  constructor(private h: HttpClient) { }

  public url: string = 'http://localhost:8085/'

  registerPizza(pizza:Pizza):Observable<any>{
    return this.h.post(this.url +"addpizza",pizza)
  }

  getPizzaList(): Observable<Pizza[]>{
    return this.h.get<Pizza[]>(this.url+"viewpizza")
  }


  getPizzaById(pizzaId:number): Observable<Pizza>{
    return this.h.get<Pizza>(this.url+"viewpizza/"+pizzaId)
  }
  updatePizza(pizza:Pizza): Observable<Object>{
    return this.h.put(this.url+"updatepizza",pizza)
  }
  deletePizza(pizzaId:number): Observable<Object>{
    return this.h.delete(this.url+"deletepizza/"+pizzaId)  
  }
  pizzaDetails(pizzaType : any){
    console.log(pizzaType);
   return this.h.get< { pizzaDetail : any } >("http://localhost:8085/viewpizza/type/"+pizzaType.pizzaType);
 }

 pizzaFilter(min:any,max:any){
  console.log(min,max);
  return this.h.get<{ FilterPizza:any}>("http://localhost:8085/viewpizza/"+min.min+"/"+max.max);
 }
  
}
