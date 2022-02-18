import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmailModel } from '../../Models/EmailModel';
import { Message } from '../../Models/Message';

@Component({
  selector: 'app-sendemail',
  templateUrl: './sendemail.component.html',
  styleUrls: ['./sendemail.component.css']
})
export class SendemailComponent implements OnInit {

  constructor(private activatedroute:ActivatedRoute,
    private router:Router)
   {
    this.message= new Message(history.state.id,history.state.subject,history.state.message);
console.log(this.message);
   }
  @ViewChild('closeModal',{read:ElementRef}) closeModal!: ElementRef;
  @ViewChild('emailsContainer',{read:ElementRef}) emailsContainer!: ElementRef;
  @ViewChild('emailInput',{read:ElementRef}) emailInput!: ElementRef;
  Emails:string[]=[];
 message!:Message;


EmailModel:EmailModel={Emails:this.Emails, Message: this.message};
  ngOnInit(): void {


    }
  public onSave() {
    this.closeModal.nativeElement.click();
  }
  navigate():void{
    console.log("navigate");
    //this.router.navigateByUrl("/companies");
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate(['/messages']));
  }
  AddEmail(){
    this.Emails.push(this.emailInput.nativeElement.value);
    this.emailInput.nativeElement.value='';
  }
  DeleteEmail(email:string){
    let index=this.Emails.findIndex(e=>e===email);
    this.Emails.splice(index,1);
  }
}
