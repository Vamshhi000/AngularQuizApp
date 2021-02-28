import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinalscoreComponent } from './finalscore/finalscore.component';
import { LeaderBoardComponent } from './leader-board/leader-board.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { QuizComponentComponent } from './quiz-component/quiz-component.component';
import { RegisterComponentComponent } from './register-component/register-component.component';
import { AuthguardService } from './services/authguard.service';

const routes: Routes = [
  // {path:'',component:HomeScreenComponent},
 

{path:'LoginComponent',component:LoginComponentComponent},
{path:'RegisterComponent',component:RegisterComponentComponent},
{path : '' , redirectTo : '/LoginComponent' , pathMatch : 'full'},




{
  path: '',
  canActivate: [AuthguardService],
  children: [

    {path:'quizComponent',component:QuizComponentComponent},
    {path:'final',component:FinalscoreComponent},
    {path:'leader',component:LeaderBoardComponent}
  ]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
