import { Coupan } from "./coupan";
import { Order } from "./order";
import { Pizza } from "./pizza";

export class PizzaOrder {
    pizza: Pizza[];
    coupan: Coupan;
    order: Order;
    quantity: number;
    transactionMode: string;
    size: string;
    totalCost: number;
    orderDate : Date;
    

    constructor(pizza: Pizza[], quantity: number, transactionMode: string, 
        coupan: Coupan,  size: string,   totalCost: number,order:Order,orderDate:Date){
    
    
	this.transactionMode = transactionMode;
	this.quantity = quantity;
	this.size = size;
	this.totalCost = totalCost;
	this.pizza = pizza;
	this.order = order;
	this.coupan = coupan;
    this.orderDate=orderDate;
    }
}
