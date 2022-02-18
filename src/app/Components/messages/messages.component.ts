import { Component, Input, OnInit } from '@angular/core';
import { Message } from '../../Models/Message';
import { FormGroup } from '@angular/forms';
import { Guid } from 'src/app/Models/Guid';
import { Router } from '@angular/router';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
//@Input() Message!:Message;
  constructor(private router:Router) { }
Messages:Message[]=[];
  ngOnInit(): void {
  }

addMessage(data:FormGroup){
  //console.log(data.value.message);
this.Messages.push(new Message(Guid.newGuid(),data.value.subject,data.value.message));
}
Deletemessage(id:string){
  let index=this.Messages.findIndex(m=>m.id===id);
  this.Messages.splice(index,1);
}
}
