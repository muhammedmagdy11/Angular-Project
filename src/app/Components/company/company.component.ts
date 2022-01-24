import { Component, Input, OnInit } from '@angular/core';
import { Company } from '../../Models/company';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  constructor() { }
  @Input()company!: Company;
  ngOnInit(): void {
  }

}
