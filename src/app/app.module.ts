import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { QuestionComponent } from './question/question.component';
import { AskQuestionComponent } from './ask-question/ask-question.component';
import { AnswerComponent } from './question/answer/answer.component';
import { AnswerVotingControlsComponent } from './question/answer/answer-voting-controls/answer-voting-controls.component';
import { AnswerInputComponent } from './question/answer-input/answer-input.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    QuestionComponent,
    AskQuestionComponent,
    AnswerComponent,
    AnswerVotingControlsComponent,
    AnswerInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
