import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyService } from 'src/app/Services/company.service';
import { UpdateCompany } from '../../Models/UpdateCompany';
import { NgForm } from '@angular/forms';
import { Company } from 'src/app/Models/company';

@Component({
  selector: 'app-updatecompany',
  templateUrl: './updatecompany.component.html',
  styleUrls: ['./updatecompany.component.css']
})
export class UpdatecompanyComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute,private service:CompanyService,private router:Router) { }
  id!: string;
  @ViewChild('closeModal',{read:ElementRef}) closeModal!: ElementRef;
  company: UpdateCompany = {id:'',name:'',address:'',country:''};
  companyForList!: Company;
  @Output() UpdateEvent = new EventEmitter<Company>();

  ngOnInit(): void {
    console.log("Update");
    this.activatedRoute.params.subscribe(params => {
      this.id = params["id"];});
    this.service.getcompany(this.id).subscribe(company=>this.company=company);
    }
    public onSave() {
      this.closeModal.nativeElement.click();
    }
    Update(form:NgForm){
      this.service.UpdateCompany(this.company).subscribe(company=>{this.companyForList=company
        this.UpdateEvent.emit(this.companyForList);
        form.resetForm();
        this.onSave();
      });

          }
    navigate():void{
      console.log("navigate");
      //this.router.navigateByUrl("/companies");
      this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
      this.router.navigate(['/companies']));
    }

}
