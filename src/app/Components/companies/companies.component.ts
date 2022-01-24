import { CreateCompany } from './../../Models/CreateCompany';
import { Company } from './../../Models/company';
import { Component, OnInit,Input, OnChanges, SimpleChanges } from '@angular/core';
import {CompanyService} from '../../Services/company.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit,OnChanges {

  constructor(private service:CompanyService,private router:Router) {

   }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("Change");
    console.log(changes);
  }
   @Input() title:any;

 Companies!: Company[];
  ngOnInit(): void {
    this.service.getcompanies().subscribe(
      Companies =>{
      console.log("COMPANIES");
      console.log(Companies);
      this.Companies=Companies;
      console.log(this.Companies);

    },
    ()=> {
      this.router.navigateByUrl('/forbidden');
  });
  }
  PushToList(res:Company){
this.Companies.push(res);
  }
  UpdateInList(res:Company){
   console.log("Updated successfully");
      }
  deleteCompany(id:string){
    if(confirm("Are you sure to delete this record ?")) {
    this.service.Delete(id).subscribe(()=>{this.ngOnInit();});
    }
  }
}

