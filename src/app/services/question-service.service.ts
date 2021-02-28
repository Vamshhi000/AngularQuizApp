import { Injectable } from '@angular/core';
import { Quiz } from '../models/quizModel';

@Injectable({
  providedIn: 'root'
})
export class QuestionServiceService {

  constructor() { }


  quezzes:Quiz[]=[
    {
     
      question:"In Angular, you can pass data from the parent component to the child component by using:",
      answer:[{option:"@Output()",correct:false},{option:"@Input()",correct:true},{option:"input",correct:false},{option:"output",correct:false}]
    },
    {
     
      question:"In Angular routing, which tag is used to render matched component via active route?",
      answer:[{option:" <router></router>",correct:false},{option:" <router-output></router-output>",correct:false},{option:"<router-outlet></router-outlet>",correct:true},{option:" <router-display></router-display>",correct:false}]
    },
    {
     
      question:"Which command is used to create a component in angular",
      answer:[{option:"ng g s xxx",correct:false},{option:"ng g d xxx",correct:false},{option:"ng g c xxx",correct:true},{option:"ng g g xxx",correct:false}]
    },
    {
      
      question:"angular developed by",
      answer:[{option:"Google",correct:true},{option:"Facebook",correct:false},{option:"Microsoft",correct:false},{option:"Twitter",correct:false}]
    },
    {
   
      question:"Which angular module is needed to use NgIf,NgFor",
  answer:[{option:"HtttpClientModule",correct:false},{option:"CommonsModule",correct:false},{option:"FormsModule",correct:true},{option:"BrowserModule",correct:false}]
    }
  ]


  getquezzes(){
    return this.quezzes;
  }
}
