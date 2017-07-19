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
    //console.log(this.currentAnswer);
    this.emitAnswer.emit(this.currentAnswer);
    this.currentAnswer = '';
  }

}
