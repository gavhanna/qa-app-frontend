import { Component } from '@angular/core';
import { Question } from './question.model';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // private url = 'https://damp-falls-41014.herokuapp.com/questions';
  private url = 'http://127.0.0.1:3000/questions';
  questions: Question[];

  constructor(private http: Http) {
    console.log('Hello fellow user');
    this.getData();
    this.getQuestions();
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
    this.getQuestions();
  }

  onReceiveAnswer(answer) {
    const self = this;
    let ans: string;
    let qId: string;

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
      () => {},
      err => console.error(err)
    )
  }

  sendQuestion(question) {
    return this.http.post(this.url, {text: question})
  }


  OnInit() {
  }
}
