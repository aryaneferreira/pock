import { Component, Input, OnInit } from '@angular/core';
import { Question } from './question';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-question',
  templateUrl: './dynamic-form-question.component.html',
  styleUrls: ['./dynamic-form-question.component.scss']
})
export class DynamicFormQuestionComponent implements OnInit {
  @Input() question: Question;
  @Input() form: FormGroup;

  get isInvalid() { return this.form.controls[this.question.id].valid; }

  ngOnInit() {
    // ver como dar um debounce time
      this.form.get(this.question.id).valueChanges
      .subscribe(() => {
        const created = new Question({
          id: this.question.id,
          value: this.form.controls[this.question.id].value
        });
        console.log(created);
      });
  }
}
