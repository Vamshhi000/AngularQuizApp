import { Component, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Customvalidators } from '../customValidator/customValidator';

import { User } from '../models/user';
import {AuthenticationServiceService} from '../services/authentication-service.service';

@Component({
  selector: 'app-register-component',
  templateUrl: './register-component.component.html',
  styleUrls: ['./register-component.component.css']
})
export class RegisterComponentComponent implements OnInit {

  constructor(private fb:FormBuilder,private authservice:AuthenticationServiceService,private router:Router) { }
  userform:FormGroup;
  user:User;
  isSucuess:boolean;
  message:String;
  diserror:Boolean=false;
  myimg:string ="assets/images/quiz.png";

  userr:any={};
    ngOnInit(): void {
  
      this.userform=this.fb.group({
        fullName:['',[Validators.required,Validators.maxLength(30),Validators.minLength(5)]],
     
        email:['',[Validators.required,Customvalidators.emailValidator]],
        password:['',[Validators.required,Validators.maxLength(12),Validators.minLength(8)]],

      })
      

  
  
    }
    ngOnChanges():void{
  
    }
  
  
  register(){



this.userr=Object.assign(this.userr,this.userform.value);

if(this.verifyUser(this.userr)){
  this.addUser(this.userr);
}

  }


  addUser(user){
    let users=[];
    if(localStorage.getItem('Users')){
      users=JSON.parse(localStorage.getItem('Users'))
    users=[user, ...users];
    }else{
      users=[user];
    }
    localStorage.setItem('Users', JSON.stringify(users));
    this.router.navigate(['/LoginComponent']);
  }

  verifyUser(formUser):boolean{
    let users=[];
    let verifier:boolean=true
    users=JSON.parse(localStorage.getItem('Users'))

if(users!=null){
  users.forEach((val)=>{
    if(formUser.email===val.email){
     verifier=false
     this.forError("User already registerd please! LOGIN")
    }
  })
}

   return verifier; 
  }


  forError(message){

    this.message=message;

this.isSucuess=false;
this.diserror=true;
setTimeout(()=>{this.diserror=false},5000);
}
}
