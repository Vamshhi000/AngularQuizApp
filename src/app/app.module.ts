import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponentComponent } from './register-component/register-component.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {HttpClientModule} from '@angular/common/http';
import { QuizComponentComponent } from './quiz-component/quiz-component.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { BackgroundDirective } from './background.directive';
import { MatRadioModule} from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { FinalscoreComponent } from './finalscore/finalscore.component';
import { LeaderBoardComponent } from './leader-board/leader-board.component';
import {MatDialogModule} from '@angular/material/dialog';
import { NavbarComponent } from './navbar/navbar.component';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponentComponent,
    LoginComponentComponent,
    QuizComponentComponent,
    BackgroundDirective,
    FinalscoreComponent,
    LeaderBoardComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatRadioModule,
    MatButtonModule,
    MatDialogModule
    
    

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
