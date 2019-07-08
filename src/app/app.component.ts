import { Component, OnInit } from '@angular/core';
import { Question } from './question';
import { QuestionGateway } from './question.gateway';
import { FormControl } from '@angular/forms';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  questions: Question[];

  themeControl = new FormControl('light-blue');

  linkRel = document.querySelector('#themeControl') as HTMLLinkElement;
  constructor(
    private readonly gateway: QuestionGateway
  ) {
    this.questions = this.gateway.getQuestions();
  }

  ngOnInit() {
    (this.themeControl.valueChanges as Observable<string>)
    .pipe(
      map(theme => `./themes/${theme}.css`)
    ).subscribe(sourceUrl => {
      console.log(sourceUrl);
      this.linkRel.href = sourceUrl;
    });
  }

}
