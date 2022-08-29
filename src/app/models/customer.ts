import { User } from "./user";

export class Customer {
    customerId:number;
    customerMobile: number ;
    user:User ;
    customerName: string ;
    customerEmail: string ;
    customerAddress: string;

    constructor(customerId:number,customerMobile: number,customerName: string,customerEmail: string,customerAddress: string,user: User){
        this.customerId=customerId
        this.customerMobile=customerMobile;
        this.user=user;
        this.customerName=customerName;
        this.customerEmail=customerEmail;
        this.customerAddress=customerAddress; 
   }
}
