import { Component } from '@angular/core';
import { Question } from './question.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  questions: Question[] = [
    new Question(
      new Date(),
      'username01',
      'Why do birds suddenly appear?',
      ['cos you fucking startle them, you loud asshole.', 'LoL sng lyrcs!!']),
    new Question(
      new Date(),
      'TEST_USER_DOS',
      'What poison should I use for my upcoming fight?',
      ['POISIN IS FOR PU55135', 'Somethin\' slow and disturbingly painful, :D...',
        'piss'
      ])
    ];

  onReceiveQuestion(question: any) {
    this.questions.unshift(new Question(new Date(), question.username, question.question, []))
  }

  onReceiveAnswer(answer) {
    this.questions.forEach(function(question) {
      if (question.id === answer.questionId) {
        console.log(question.answers);
        question.answers.push(answer.answer);
      }
    })
  }
}
