import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { AuthenticationServiceService } from '../services/authentication-service.service';

@Component({
  selector: 'app-leader-board',
  templateUrl: './leader-board.component.html',
  styleUrls: ['./leader-board.component.css']
})
export class LeaderBoardComponent implements OnInit {

  constructor(private authservice:AuthenticationServiceService) { }

  ngOnInit(): void {
    this.getWinnersData();
  }
  tableData:any[]=[];
 winnersMap = new Map<number,Object>(); 
 value:number=1; 
  getWinnersData(){
this.tableData=JSON.parse(localStorage.getItem("Winners"));
this.tableData.sort((a,b)=>{
  return b.score-a.score;
})

this.tableData.forEach((val)=>{
  this.winnersMap.set(this.value,val);
  this.value++;
})

this.value=1;
console.log(this.winnersMap);
  }
}
