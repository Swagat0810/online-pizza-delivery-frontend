import { Customer } from "./customer";

export class Order {
    orderType:string;
	orderDescription:string;
    customer:Customer;

    constructor(orderType:string,orderDescription:string,customer:Customer){
        this.orderType=orderType;
        this.orderDescription=orderDescription;
        this.customer=customer
    }
}