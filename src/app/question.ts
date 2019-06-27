export class Question {
  id: string;
  order: number;
  description: string;
  fieldType: string;

  constructor(init?: Partial<Question>) {
    Object.assign(this, init);
  }
}
