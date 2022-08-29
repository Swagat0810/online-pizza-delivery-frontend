

export class Pizza {
    pizzaId:number;
    pizzaName:string;
    pizzaType:string ;  
    pizzaDescription:string;
    pizzaCost:number ;
    public pizzaUrl:string ;
  

    constructor(pizzaId:number,pizzaName:string,pizzaType:string,pizzaDescription:string,pizzaCost:number,pizzaUrl:string){
      this.pizzaId=pizzaId;
        this.pizzaName=pizzaName;
        this.pizzaType=pizzaType;       
        this.pizzaDescription=pizzaDescription;
        this.pizzaCost=pizzaCost;
        this.pizzaUrl=pizzaUrl;
    }
}
