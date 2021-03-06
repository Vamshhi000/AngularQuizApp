import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationServiceService } from '../services/authentication-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router,private authservice:AuthenticationServiceService) { }

  ngOnInit(): void {
    this.getLocalStoragedata=JSON.parse(localStorage.getItem("user"));
    this.name=this.getLocalStoragedata.fullName;

  }
  myimg:string ="assets/images/quiz.png";
name:string;
getLocalStoragedata:any;

  logout(){
    
    localStorage.removeItem('user');
    this.authservice.verification(false);
    this.router.navigate(['/LoginComponent']);
  }
}
