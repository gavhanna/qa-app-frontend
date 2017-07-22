import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {

  currentAnswer: string;

  @Input() answers: string[];
  @Input() questionId: string;

  @Output() emitAnswer = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  onAnswerSubmit(event) {
    this.emitAnswer.emit(this.currentAnswer);
    this.currentAnswer = '';
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

}
