export class Question {
  public postedAt: Date;
  public username: string;
  public question: string;
  public answers: string[];
  public id: number;

  constructor(postedAt: Date, username: string, question: string, answers: string[] ) {
      this.postedAt = postedAt;
      this.username = username;
      this.question = question;
      this.answers = answers;
      this.id = Math.random();
  }
}
