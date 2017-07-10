import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { Question } from '../question.model';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  @Input() question: Question;
  @Output() emitAnswer = new EventEmitter<any>();

  sendAnswer: any = {};


  constructor() { }

  ngOnInit() {
  }

  onReceiveAnswer(answer) {
    this.sendAnswer = {
      'questionId': this.question.id,
      'answer': answer
    };
    this.emitAnswer.emit(this.sendAnswer);
  }

}
