import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { QuestionControlGateway } from './question-control.gateway';
import { DynamicFormComponent } from './dynamic-form.component';
import { DynamicFormQuestionComponent } from './dynamic-form-question.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { QuestionGateway } from './question.gateway';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { MatExpansionModule } from '@angular/material/expansion';
import { CommonModule } from '@angular/common';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    DynamicFormComponent,
    DynamicFormQuestionComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatExpansionModule,
    NoopAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatSelectModule,
  ],
  providers: [
    QuestionControlGateway,
    QuestionGateway
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
