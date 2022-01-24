import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompaniesComponent } from './Components/companies/companies.component';
import { EmployeeComponent } from './Components/employee/employee.component';
import { FormsModule } from '@angular/forms';
import { CompanydetailsComponent } from './Components/companydetails/companydetails.component';
import { CompanyComponent } from './Components/company/company.component';
import { CreatecompanyComponent } from './Components/createcompany/createcompany.component';
import { UpdatecompanyComponent } from './Components/updatecompany/updatecompany.component';
import { LoginComponent } from './Components/login/login.component';
import { ForbiddenComponent } from './Components/forbidden/forbidden.component';
import { FormsComponent } from './Components/forms/forms.component';

@NgModule({
  declarations: [
    AppComponent,
    CompaniesComponent,
    EmployeeComponent,
    CompanydetailsComponent,
    CompanyComponent,
    CreatecompanyComponent,
    UpdatecompanyComponent,
    LoginComponent,
    ForbiddenComponent,
    FormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
