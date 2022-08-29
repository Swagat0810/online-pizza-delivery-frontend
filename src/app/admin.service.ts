import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from './models/admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpClient:HttpClient) { }
  adminlogin(admin:Admin):Observable<Object>{
    return this.httpClient.get<{ admin :any }>("http://localhost:8085/admins/signIn/"+admin.adminName+"/"+admin.adminPassword)
}
}
