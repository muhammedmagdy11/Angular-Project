import { Component, OnInit, Output,EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CreateCompany } from 'src/app/Models/CreateCompany';
import { CompanyService } from 'src/app/Services/company.service';
import { Company } from '../../Models/company';
import { Router } from '@angular/router';


@Component({
  selector: 'app-createcompany',
  templateUrl: './createcompany.component.html',
  styleUrls: ['./createcompany.component.css']
})
export class CreatecompanyComponent implements OnInit {

  constructor(private service:CompanyService,private router:Router) {
  }
  @ViewChild('closeModal',{read:ElementRef}) closeModal!: ElementRef;
  ngOnInit(): void {
    console.log("create");
  }
  @Output() CreateEvent = new EventEmitter<Company>();
  company: CreateCompany = {name:'',address:'',country:''};
   create(form:NgForm){
    this.service.createCompany(this.company).subscribe(company=>{
      this.CreateEvent.emit(company);
      form.resetForm();
      this.onSave();
    });
      }
      public onSave() {
        this.closeModal.nativeElement.click();
      }
      navigate():void{
        console.log("navigate");
        //this.router.navigateByUrl("/companies");
        this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
        this.router.navigate(['/companies']));
      }
}
