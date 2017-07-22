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

  getDaysPassed(postedDate) {
    const oneDay = 24 * 60 * 60 * 1000;
    const firstDate = new Date(postedDate);
    const secondDate = new Date();
    const numOfDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime()) / (oneDay))); 

    if (numOfDays === 0) {
      return 'Today';
    } else if (numOfDays === 1) {
      return 'Yesterday';
    } else {
      return numOfDays + ' days ago';
    }
  }

  getAnswerCount() {
    if (this.question.answers.length === 1) {
      return this.question.answers.length + ' answer';
    } else {
      return this.question.answers.length + ' answers';
    }
  }

}
