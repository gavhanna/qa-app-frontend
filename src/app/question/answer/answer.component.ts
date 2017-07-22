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

    if (numOfDays === 0) {
      return 'Today';
    } else if (numOfDays === 1) {
      return 'Yesterday';
    } else {
      return numOfDays + ' days ago';
    }
  }

}
