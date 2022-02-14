import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { EmailModel } from '../../Models/EmailModel';
import { Message } from '../../Models/Message';

@Component({
  selector: 'app-sendemail',
  templateUrl: './sendemail.component.html',
  styleUrls: ['./sendemail.component.css']
})
export class SendemailComponent implements OnInit {

  constructor(private router:Router,private renderer:Renderer2, @Inject(DOCUMENT) private document: Document) { }
  @ViewChild('closeModal',{read:ElementRef}) closeModal!: ElementRef;
  @ViewChild('emailsContainer',{read:ElementRef}) emailsContainer!: ElementRef;
  @ViewChild('emailInput',{read:ElementRef}) emailInput!: ElementRef;



EmailModel:EmailModel={Emails:[], Message: new Message('','','')};
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
    const child = this.document.createElement('label');
    child.innerHTML=this.emailInput.nativeElement.value;
    this.renderer.appendChild(this.emailsContainer.nativeElement, child);
  }
}
