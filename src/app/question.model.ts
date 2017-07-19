

export class Question {
  public answers: {};
  public createdAt: string;
  public text: string;
  public _v: number;
  public _id: string;

  constructor(
    answers: {},
    createdAt: string,
    text: string,
    _v: number,
    _id: string
  ) {
      this.answers = answers;
      this.createdAt = createdAt;
      this.text = text;
      this._v = _v;
      this._id = _id;
  }
}
