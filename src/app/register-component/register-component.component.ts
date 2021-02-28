import { Component, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
    ngOnInit(): void {
  //errors method is used to validate validators in the userform object
      this.userform=this.fb.group({
        fullName:['',[Validators.required,Validators.maxLength(30),Validators.minLength(5)]],
     
        email:['',[Validators.required]],
        password:['',[Validators.required,Validators.maxLength(12),Validators.minLength(8)]],

      })
      
  
  // this.userform.get('email').setValue(this.user.email);
  // this.userform.get('password').setValue(this.user.password);
  
  
    }
    ngOnChanges():void{
  
    }
  
  
  register(){
    this.router.navigate(['/LoginComponent']);
this.authservice.register(this.userform.value).subscribe((res:any)=>{
console.log(res);
},(err:any)=>{
  console.log(err);
})
  }

  // check(){
  //   this.isSucuess=true;
  
  // }
  

}
