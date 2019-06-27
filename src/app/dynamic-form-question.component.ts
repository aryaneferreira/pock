import { Component, Input } from '@angular/core';
import { Question } from './question';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-question',
  templateUrl: './dynamic-form-question.component.html'
})
export class DynamicFormQuestionComponent {
  @Input() question: Question;
  @Input() form: FormGroup;

  get isInvalid() { return this.form.controls[this.question.id].valid; }
}
