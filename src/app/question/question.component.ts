import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Question } from 'app/question.model';

// import { Question } from '../question.model';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  @Input() question: Question;
  @Output() emitAnswer = new EventEmitter<any>();

  sendAnswer: any = {};
  revealAnswers = false;

  showAnswers() {
    if (this.revealAnswers === false) {
      this.revealAnswers = true;
    } else {
      this.revealAnswers = false;
    }
  }

  constructor() { }

  ngOnInit() {
  }

  onReceiveAnswer(answer) {
    this.sendAnswer = {
      'answer': answer,
      'questionId': this.question['_id']
    };
    this.emitAnswer.emit(this.sendAnswer);
  }

}
