import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CreateCompany } from '../../Models/CreateCompany';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
company!:CreateCompany;
  constructor() { }

  ngOnInit(): void {
  }
  submit(form:NgForm){
    console.log('submitted',form);
    this.company=form.value;
    console.log(this.company)
  }
}
