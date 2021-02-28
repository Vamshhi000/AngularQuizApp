import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {

  constructor(private http:HttpClient) { }
  baseUrl:String='http://localhost:7070/register'
  baseUrl2:String='http://localhost:7070/score'
  isAuthenticated:boolean;
  user:Observable<User>
  verification(authvar:boolean){
    if(authvar!=null){
      this.isAuthenticated=authvar;
    }
  
  }
  register(user:User):Observable<User> {
    return this.http.post<User>(`${this.baseUrl}/registration`,user);
   }


   Login(userr:User):Observable<User>{


    this.user=this.http.post<User>(`${this.baseUrl}/login`,userr);
    this.user.subscribe((res:any)=>{
      this.isAuthenticated=res.validate;
    })
      return this.http.post<User>(`${this.baseUrl}/login`,userr);
  
    }


    saveScore(user:User):Observable<User>{
      return this.http.post<User>(`${this.baseUrl2}/saveScore`,user);
    }

    getTopTenWinners():Observable<User>{
      return this.http.get<User>(`${this.baseUrl2}/winners`);
    }
}
