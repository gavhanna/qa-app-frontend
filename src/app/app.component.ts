import { Component, OnInit } from '@angular/core';
import { Question } from './question.model';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  // private url = 'https://damp-falls-41014.herokuapp.com/questions';
  private url = 'http://127.0.0.1:3000/questions';
  questions: Question[];

  constructor(private http: Http) {
    console.log('Hello fellow user');
    this.getData();
    this.getQuestions();
  }

  ngOnInit(): void {
    console.log('app initialised');
  }

  getData() {
     return this.http.get(this.url)
      .map((res: Response) => res.json());
  }

  getQuestions() {
    this.getData().subscribe(data => {
      this.questions = data;
    })
  }

  onReceiveQuestion(question: any) {
    this.sendQuestion(question);
  }

  onReceiveAnswer(answer) {
    let ans: string;
    let qId: string;
    let returnedAnswer;

    this.questions.forEach(function(question) {
      if (question['_id'] === answer.questionId) {
        ans = answer.answer;
        qId = answer.questionId;
      }
    })

    const headers = new Headers({ 'Content-Type': 'application/json'});
    const options = new RequestOptions({ headers: headers });
    this.http.post(
      this.url + '/' + qId + '/answers/',
      JSON.stringify({'text': ans}),
      options
    ).subscribe(
      (data) => {
        returnedAnswer = JSON.parse(data['_body']);
        this.questions.forEach(function(question) {
          if (question['_id'] === returnedAnswer._id) {
            question.answers = returnedAnswer.answers;
          }
        })
      },
      err => console.error(err)
    )
  }

  onReceiveVote(vote: any) {
    const self = this;
    this.questions.forEach(function(question) {
      if (question['_id'] === vote.questionId) {
        const headers = new Headers({ 'Content-Type': 'application/json'});
        const options = new RequestOptions({ headers: headers });
        self.http.post(
          self.url + '/' + vote.questionId + '/answers/' + vote.vote.ansId + '/vote-' + vote.vote.vote,
          JSON.stringify({'text': 'none'}),
          options
        ).subscribe(
          (data) => {
            console.log(data);
            const returnedObject = JSON.parse(data['_body']);
            self.questions.forEach(function(q) {
              if (q['_id'] === vote.questionId) {
                q.answers = returnedObject.answers;
              }
            })
          },
          err => console.error(err)
        )
      }
    })
  }


  sendQuestion(question: string) {
    const headers = new Headers({ 'Content-Type': 'application/json'});
    const options = new RequestOptions({ headers: headers });
    const returnedQuestion = {};
    this.http.post(
      this.url,
      JSON.stringify({'text': question}),
      options
    ).subscribe(
      (data) => {
        this.questions.unshift(JSON.parse(data['_body']))
      },
      err => console.error(err)
    )
  }

  OnInit() {
  }
}
