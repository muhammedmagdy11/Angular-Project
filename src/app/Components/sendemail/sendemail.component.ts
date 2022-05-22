import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { inject } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { EmailModel } from '../../Models/EmailModel';
import { Message } from '../../Models/Message';

@Component({
  selector: 'app-sendemail',
  templateUrl: './sendemail.component.html',
  styleUrls: ['./sendemail.component.css']
})
export class SendemailComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute,
    private router:Router)
   {

   }
  @ViewChild('closeModal',{read:ElementRef}) closeModal!: ElementRef;
  @ViewChild('emailsContainer',{read:ElementRef}) emailsContainer!: ElementRef;
  @ViewChild('emailInput',{read:ElementRef}) emailInput!: ElementRef;
  Emails:string[]=[];
 message!:Message;


EmailModel:EmailModel={Emails:this.Emails, Message: this.message};
  ngOnInit(): void {
    this.activatedRoute
    .queryParams
    .subscribe(params => {
      // Defaults to 0 if no query param provided.
      this.message=new Message(params['id'],params['Subject'],params['Message']);
      // console.log(params['id'],params['Subject'],params['Message'])
    });
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
