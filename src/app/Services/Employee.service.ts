import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Employee } from '../Models/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
url:string='https://localhost:44384/api/employee';
constructor(private _http:HttpClient) {

}
getEmployees():Observable<Employee[]>{
  return this._http.get<Employee[]>(this.url);
 }
 getEmployee(id:string):Observable<Employee>{
   return this._http.get<Employee>(`${this.url}/${id}`);
  }
 createEmployee(company:Employee):Observable<Employee>{
   return this._http.post<Employee>(this.url,company);
 }
UpdateEmployee(company:Employee):Observable<Employee>{
return this._http.put<Employee>(this.url,company);
}
Delete(id:string){
 return this._http.delete(`${this.url}/${id}`);
}
}
