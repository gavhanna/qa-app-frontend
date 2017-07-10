import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-ask-question',
  templateUrl: './ask-question.component.html',
  styleUrls: ['./ask-question.component.css']
})
export class AskQuestionComponent implements OnInit {

  currentQuestion = '';
  currentUsername = '';

  @Output() emitQuestion = new EventEmitter<any>();

  onQuestionAsked() {
    this.emitQuestion.emit(
      {
        'question': this.currentQuestion,
        'username': this.currentUsername
      }
    );
    this.currentQuestion = '';
    this.currentUsername = '';
  }

  constructor() { }

  ngOnInit() {
  }

}
