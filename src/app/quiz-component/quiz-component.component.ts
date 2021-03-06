import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FinalscoreComponent } from '../finalscore/finalscore.component';
import { Quiz } from '../models/quizModel';
import { User } from '../models/user';
import { AuthenticationServiceService } from '../services/authentication-service.service';
import { QuestionServiceService } from '../services/question-service.service';

@Component({
  selector: 'app-quiz-component',
  templateUrl: './quiz-component.component.html',
  styleUrls: ['./quiz-component.component.css']
})
export class QuizComponentComponent implements OnInit {

  constructor(private router:Router,private quizservice:QuestionServiceService,public dialog: MatDialog,private authservice:AuthenticationServiceService) { }
quzzes:Quiz[]=[]
  ngOnInit(): void {
    this.getLocalStoragedata=JSON.parse(localStorage.getItem("user"));
    this.name=this.getLocalStoragedata.fullName;
    this.quzzes=this.quizservice.getquezzes();
    this.randomize=Math.floor(Math.random()* this.quzzes.length);

  }
  myimg:string ="assets/images/quiz.png";
  
name:string;
randomize:number;
getLocalStoragedata:any;
nextQuestion=0;
answerSelected=false;
correctAnswers=0;
incorrectAnswers=0;
color:string="";
issuccess:string;
completed:boolean=false;
sendScore:User;
  logout(){
    localStorage.clear();
    this.router.navigate(['/LoginComponent']);
  }
  onClick(option:boolean){

this.answerSelected=true;
if(option){
  this.color="green";

}else{
this.color="red"
}

setTimeout(() => {
  this.color='';
  this.randomize=Math.floor(Math.random() * this.quzzes.length);
 
  this.nextQuestion++;
  this.answerSelected=false;
}, 3000);

  if(option){
    this.correctAnswers++;
  }else{
    this.incorrectAnswers++
  }
  if(this.nextQuestion===4){
    this.completed=true;

  }else{
    this.completed=false;
  }
  }

  colorchange(correct:any){


    
  }

  openDialog(): void {
    
    const dialogRef = this.dialog.open(FinalscoreComponent, {
      width: '250px',
      data: {name: this.name, score: this.correctAnswers}
    });

    dialogRef.afterClosed().subscribe(result => {
  
    });
  }

  saveScore(){
var x = new User();
x.score=this.correctAnswers
  x.name=this.name;

console.log(x);
this.addUser(x);

  }

  addUser(winner){
    let winners=[];
    if(localStorage.getItem('Winners')){
      winners=JSON.parse(localStorage.getItem('Winners'))
      winners.forEach((val,index)=>{
       if(val.name===winner.name){
         winners.splice(index,1);
       }
      })

      winners=[winner, ...winners];
    }else{
      winners=[winner];
    }
    localStorage.setItem('Winners', JSON.stringify(winners));
 
  }

}
