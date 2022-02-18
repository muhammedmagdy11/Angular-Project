export class Message {
  constructor(_id:string,_Subject: string, _Message: string) {
    this.Subject = _Subject;
    this.Message = _Message;
    this.id = _id;
  }
  id!: string;
  Subject!: string;
  Message!: string;
}
