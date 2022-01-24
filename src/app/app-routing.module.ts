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

const routes: Routes = [
  {path:'companies', component:CompaniesComponent, children:[
    {path:'create', component:CreatecompanyComponent},
    {path:'update/:id', component:UpdatecompanyComponent},
    {path:'details/:id', component:CompanydetailsComponent},
    ]},
  {path:'employees', component:EmployeeComponent, canActivate:[AuthGuard]},
  {path:'login', component:LoginComponent},
  {path:'forbidden', component:ForbiddenComponent},
  {path:'forms', component:FormsComponent}
];

@NgModule({
  providers:[AuthGuard],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
