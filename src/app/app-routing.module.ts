import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompaniesComponent } from './Components/companies/companies.component';
import { EmployeeComponent } from './Components/employee/employee.component';
import { CompanydetailsComponent } from './Components/companydetails/companydetails.component';
import { CreatecompanyComponent } from './Components/createcompany/createcompany.component';
import { UpdatecompanyComponent } from './Components/updatecompany/updatecompany.component';
import { AuthGuard } from './Guards/auth.guard';
import { LoginComponent } from './Components/login/login.component';
import { ForbiddenComponent } from './Components/forbidden/forbidden.component';
import { FormsComponent } from './Components/forms/forms.component';
import { ReactiveFormComponent } from './Components/reactive-form/reactive-form.component';
import { MessagesComponent } from './Components/messages/messages.component';
import { SendemailComponent } from './Components/sendemail/sendemail.component';
import { EmployeesComponent } from './Components/Employees/Employees.component';

const routes: Routes = [
  {path:'companies', component:CompaniesComponent, children:[
    {path:'create', component:CreatecompanyComponent},
    {path:'update/:id', component:UpdatecompanyComponent},
    {path:'details/:id', component:CompanydetailsComponent},
    ]},
  {path:'employee', component:EmployeeComponent, canActivate:[AuthGuard]},
  {path:'employees', component:EmployeesComponent},
  {path:'login', component:LoginComponent},
  {path:'forbidden', component:ForbiddenComponent},
  {path:'forms', component:FormsComponent},
  {path:'emails', component:ReactiveFormComponent},
  {path:'messages', component:MessagesComponent,children:[
     {path:'SendEmail',component:SendemailComponent}
  ]}

];

@NgModule({
  providers:[AuthGuard],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
