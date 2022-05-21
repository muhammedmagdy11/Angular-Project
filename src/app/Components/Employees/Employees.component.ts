import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/Models/Employee';
import { EmployeeService } from 'src/app/Services/Employee.service';

@Component({
  selector: 'app-Employees',
  templateUrl: './Employees.component.html',
  styleUrls: ['./Employees.component.css']
})
export class EmployeesComponent implements OnInit {

  constructor(private service: EmployeeService, private router: Router) {

  }
  Employees!: Employee[];
  ngOnInit(): void {
    this.service.getEmployees().subscribe(
      employees => {
        console.log(employees);
        this.Employees = employees;
        console.log("Employees");
        console.log(this.Employees);

      });
  }

}
