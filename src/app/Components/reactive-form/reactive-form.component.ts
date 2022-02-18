import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup,FormControl,FormArray,Validators } from '@angular/forms';
import { Message } from '../../Models/Message';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  @Output() addMessage: EventEmitter<FormGroup>=new EventEmitter<FormGroup>();;
  constructor() { }
  userForm!: FormGroup;
  ngOnInit(): void {
this.userForm=new FormGroup({
  subject: new FormControl(''),
  message: new FormControl('')
});
  }
  submit(){
this.addMessage.emit(this.userForm);
this.userForm.reset();
  }
}
