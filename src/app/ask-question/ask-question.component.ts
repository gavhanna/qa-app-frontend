import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-ask-question',
  templateUrl: './ask-question.component.html',
  styleUrls: ['./ask-question.component.css']
})
export class AskQuestionComponent implements OnInit {

  currentQuestion = '';

  @Output() emitQuestion = new EventEmitter<any>();

  onQuestionAsked() {
    this.emitQuestion.emit(this.currentQuestion);
    this.currentQuestion = '';
  }

  constructor() { }

  ngOnInit() {
  }

}
