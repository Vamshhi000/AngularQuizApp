import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {

  constructor(private http:HttpClient) { }

  isAuthenticated:boolean;
  user:Observable<User>
  verification(authvar:boolean){
    if(authvar!=null){
      this.isAuthenticated=authvar;
    }
  
  }
  
}
