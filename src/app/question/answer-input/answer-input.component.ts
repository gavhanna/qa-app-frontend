import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-answer-input',
  templateUrl: './answer-input.component.html',
  styleUrls: ['./answer-input.component.scss']
})
export class AnswerInputComponent implements OnInit {

  currentAnswer = '';

  @Output() emitAnswer = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  onAnswerSubmit(event) {
    this.emitAnswer.emit(this.currentAnswer);
    this.currentAnswer = '';
  }

}
