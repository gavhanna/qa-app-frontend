import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-answer-voting-controls',
  templateUrl: './answer-voting-controls.component.html',
  styleUrls: ['./answer-voting-controls.component.scss']
})
export class AnswerVotingControlsComponent implements OnInit {

  @Input() score: number;
  @Output() emitVote = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  vote(vote: string) {
    this.emitVote.emit(vote);
  }

}


