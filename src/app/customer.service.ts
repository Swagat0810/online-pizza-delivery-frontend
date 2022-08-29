import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private baseUrl="http://localhost:8085/"
  custId!:any;
  customerId!:number;
  constructor(private httpClient:HttpClient) { }

  customerRegister(customer:Customer): Observable<Object>{
    return this.httpClient.post("http://localhost:8085/saveCustomer",customer)
  }

  getCustomerList(): Observable<Customer[]>{
    return this.httpClient.get<Customer[]>(this.baseUrl+"viewCustomer")
  }

  deleteCustomer(customerId:number): Observable<Object>{
    return this.httpClient.delete(this.baseUrl+"deleteCustomer/"+customerId)  
  }
  getCustomerById(customerId:number): Observable<Customer>{
    this.custId=sessionStorage.getItem('custId');
    this.customerId=parseInt(this.custId);
    return this.httpClient.get<Customer>(this.baseUrl+"viewCustomer/"+this.customerId)
  }
  updateCustomer(customer:Customer): Observable<Object>{
    return this.httpClient.put(this.baseUrl+"updateCustomer",customer)
  }
}
