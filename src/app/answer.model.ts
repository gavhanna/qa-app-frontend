export class Answer {
  constructor(
    public createdAt: string,
    public text: string,
    public updatedAt: string,
    public votes: number,
    public _id: string
  ) {
  }
}
