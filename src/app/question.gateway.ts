import { Injectable } from '@angular/core';
import { Question } from './question';

@Injectable()
export class QuestionGateway {
  constructor() {}
  getQuestions() {
    const questions: Question[] = [
      new Question({
        id: '263-7',
        description: 'CREATININA FORMULA',
        fieldType: 'NUMERIC',
        order: 7
      }),
      new Question({
        id: '263-16',
        description: 'BILIRRUBINA TOTAL',
        fieldType: 'NUMERIC',
        order: 16
      }),
      new Question({
        id: '263-25',
        description: 'INR (TP)',
        fieldType: 'NUMERIC',
        order: 25
      }),
    ];
    return questions;
  }
}
