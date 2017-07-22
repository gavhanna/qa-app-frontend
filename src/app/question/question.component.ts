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
    const hours = Math.abs(secondDate.getTime() - firstDate.getTime()) / 36e5;

    if (numOfDays === 0) {
      return this.getHours(hours);
    } else if (numOfDays === 1) {
      return 'Yesterday';
    } else {
      return numOfDays + ' days ago';
    }
  }

  getHours(hours: number) {
    if ((hours < 0.01)) {
      return 'Just now';
    } else if(hours < 0.02) {
      return '1 minute ago';
    } else if (hours < 0.1) {
      return hours.toString().slice(3, 4) + ' minutes ago';
    } else if (hours < 0.6) {
      return hours.toString().slice(2, 4) + ' minutes ago';
    } else {
      return ((hours / 60) * 100).toString().slice(0, 1) + ' hours ago';
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
