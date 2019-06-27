import { Injectable } from '@angular/core';
import { Question } from './question';
import {FormControl, FormGroup } from '@angular/forms';

@Injectable()
export class QuestionControlGateway {
  constructor() {}

  toFormGroup(questions: Question[]) {
    const group: any = {};

    questions.forEach(question => {
      group[question.id] = new FormControl();
    });
    return new FormGroup(group);
  }
}
