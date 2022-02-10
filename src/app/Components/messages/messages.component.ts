import { Component, Input, OnInit } from '@angular/core';
import { Message } from '../../Models/Message';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
//@Input() Message!:Message;
  constructor() { }
Messages:Message[]=[];
  ngOnInit(): void {
  }

addMessage(data:FormGroup){
  console.log(data.value.message);
this.Messages.push(new Message(data.value.subject,data.value.message));
console.log(this.Messages);
}
}
