export enum FieldType {
  numeric = 'NUMERIC',
  numericWithDefaultAnswer = 'NUMERIC_WITH_DEFAULT_ANSWER',
  defaultAnswers = 'DEFAULT_ANSWERS',

}

export class Question {
  id: string;
  order: number;
  description: string;
  fieldType: FieldType;
  minimumValue: number;
  maximumValue: number;

  // exemplo
  value: number;
  constructor(init?: Partial<Question>) {
    Object.assign(this, init);
  }
}
