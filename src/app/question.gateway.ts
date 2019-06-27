import { Injectable } from '@angular/core';
import { Question, FieldType } from './question';

@Injectable()
export class QuestionGateway {
  constructor() {}
  getQuestions() {
    const questions: Question[] = [
      new Question({
        id: '263-7',
        description: 'CREATININA FORMULA',
        fieldType: FieldType.numericWithDefaultAnswer,
        order: 7
      }),
      new Question({
        id: '263-16',
        description: 'BILIRRUBINA TOTAL',
        fieldType: FieldType.numeric,
        order: 16
      }),
      new Question({
        id: '263-25',
        description: 'INR (TP)',
        fieldType: FieldType.numeric,
        order: 25
      }),
      new Question({
        id: '1-1',
        description: 'TEMPERATURA( RETAL C )',
        fieldType: FieldType.defaultAnswers,
        order: 25
      }),
      new Question({
        id: '1-28',
        description: 'ABERTURA OCULAR',
        fieldType: FieldType.defaultAnswers,
        order: 25
      }),
    ];
    return questions;
  }
}
