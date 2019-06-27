import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QuestionControlGateway } from './question-control.gateway';
import { DynamicFormComponent } from './dynamic-form.component';
import { DynamicFormQuestionComponent } from './dynamic-form-question.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { QuestionGateway } from './question.gateway';

@NgModule({
  declarations: [
    AppComponent,
    DynamicFormComponent,
    DynamicFormQuestionComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    QuestionControlGateway,
    QuestionGateway
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
