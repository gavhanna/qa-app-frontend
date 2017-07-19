

export class Question {
  public answers: any[];
  public createdAt: string;
  public text: string;
  public _v: number;
  public _id: string;

  constructor(
    answers: any[],
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
