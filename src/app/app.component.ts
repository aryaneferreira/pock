import { Component } from '@angular/core';
import { Question } from './question';
import { QuestionGateway } from './question.gateway';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  questions: Question[];
  constructor(
    private readonly gateway: QuestionGateway
  ) {
    this.questions = this.gateway.getQuestions();
  }
}
