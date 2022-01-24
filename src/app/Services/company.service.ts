import { UpdateCompany } from './../Models/UpdateCompany';
import { CreateCompany } from './../Models/CreateCompany';
import { Company } from './../Models/company';
import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
const options={headers:new HttpHeaders({
  authorization:"Bearer "+sessionStorage.getItem('token')
})}
@Injectable({
  providedIn: 'root'
})
export class CompanyService {
url:string='http://localhost:30411/api/companies';
  constructor(private _http:HttpClient) {

   }
  getcompanies():Observable<Company[]>{
   return this._http.get<Company[]>(this.url,options);
  }
  getcompany(id:string):Observable<UpdateCompany>{
    return this._http.get<UpdateCompany>(`${this.url}/${id}`, options);
   }
  createCompany(company:CreateCompany):Observable<Company>{
    return this._http.post<Company>(this.url,company, options);
  }
UpdateCompany(company:UpdateCompany):Observable<Company>{
return this._http.put<Company>(this.url,company, options);
}
Delete(id:string){
  return this._http.delete(`${this.url}/${id}`, options);
}
}
