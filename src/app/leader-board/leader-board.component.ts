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
  tableData:User[]=[];

  getWinnersData(){
    this.authservice.getTopTenWinners().subscribe((res:any)=>{
      console.log(res);
this.tableData=res;

    },(err)=>{})
  }
}
