import { Component, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../models/user';
import {AuthenticationServiceService} from '../services/authentication-service.service';
import { Router } from '@angular/router';

import { Observable, Subject } from 'rxjs';
import { CommonServiceService } from '../services/common-service.service';
import { Customvalidators } from '../customValidator/customValidator';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {

  constructor(private fb:FormBuilder,private authservice:AuthenticationServiceService,private router:Router,
 private commnonsubject:CommonServiceService) { }
userform:FormGroup;
user:User;
myimg:string ="assets/images/quiz.png";
getLocalStoragedata:any;
usersLocalData:any[]=[];

isSucuess:boolean;
message:String;
diserror:boolean=false;
  ngOnInit(): void {

    this.userform=this.fb.group({
     
      email:['',[Validators.required,Customvalidators.emailValidator]],
      password:['',[Validators.required,Validators.maxLength(12),Validators.minLength(8)]]


      

    })
    this.userform.get('email').errors



this.getLocalStoragedata=JSON.parse(localStorage.getItem("user"));

if(this.getLocalStoragedata!=null){
  this.authservice.verification(true);
}
this.commnonsubject.userSubject.next(this.getLocalStoragedata);
this.commnonsubject.usersBeSubject.next(this.getLocalStoragedata);
this.router.navigate(['/quizComponent']);
  }








Login(){


console.log(this.userform.value.email);
this.usersLocalData=JSON.parse(localStorage.getItem("Users"));


  this.usersLocalData.forEach((val)=>{
    console.log(val.email);

    if(this.userform.value.email===val.email){
    if(this.userform.value.password===val.password)  {
localStorage.setItem("user",JSON.stringify(val));
this.getLocalStoragedata=JSON.parse(localStorage.getItem("user"));
this.authservice.verification(true);
this.commnonsubject.userSubject.next(this.getLocalStoragedata);
this.commnonsubject.usersBeSubject.next(this.getLocalStoragedata);



    this.router.navigate(['/quizComponent']);


    }else{
      this.forError("Please enter valid password");

    }


    }else{
         

  this.forError("Your not a registered user");
    }
  })

}
forError(message){

        this.message=message;

    this.isSucuess=false;
    this.diserror=true;
    setTimeout(()=>{this.diserror=false},5000);
}


}
