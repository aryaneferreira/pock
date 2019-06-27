import { Component, OnInit, Input } from '@angular/core';
import { Question } from './question';
import { FormGroup } from '@angular/forms';
import { QuestionControlGateway } from './question-control.gateway';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html'
})
export class DynamicFormComponent implements OnInit {
  @Input() questions: Question[];
  form: FormGroup;
  payLoad = '';
  constructor(
    private readonly gateway: QuestionControlGateway
  ) {}
  ngOnInit() {
    this.form = this.gateway.toFormGroup(this.questions);
    console.log(this.form);

    this.form.valueChanges
    .subscribe(() => {
      console.log(this.form);
    });
  }
  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }
}
