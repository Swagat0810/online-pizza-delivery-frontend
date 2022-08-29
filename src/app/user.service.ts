import { HttpClient,HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { }

  customerlogin(user:User):Observable<Object>{
    return this.httpClient.get<{user:any}>("http://localhost:8085/users/signIn/"+user.userName+"/"+user.userPassword)

  }
  resetPassword(params:HttpParams):Observable<any>{
    
    return this.httpClient.post("http://localhost:8085/users/resetpassword",params );

  }
}
