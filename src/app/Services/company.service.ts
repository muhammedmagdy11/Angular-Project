import { UpdateCompany } from './../Models/UpdateCompany';
import { CreateCompany } from './../Models/CreateCompany';
import { Company } from './../Models/company';
import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
// const options={headers:new HttpHeaders({
//   authorization:"Bearer "+sessionStorage.getItem('token')
// })}
@Injectable({
  providedIn: 'root'
})
export class CompanyService {
url:string= environment.apiUrl +'/api/companies';
  constructor(private _http:HttpClient) {

   }
  getcompanies():Observable<Company[]>{
   return this._http.get<Company[]>(this.url);
  }
  getcompany(id:string):Observable<UpdateCompany>{
    return this._http.get<UpdateCompany>(`${this.url}/${id}`);
   }
  createCompany(company:CreateCompany):Observable<Company>{
    return this._http.post<Company>(this.url,company);
  }
UpdateCompany(company:UpdateCompany):Observable<Company>{
return this._http.put<Company>(this.url,company);
}
Delete(id:string){
  return this._http.delete(`${this.url}/${id}`);
}
}
