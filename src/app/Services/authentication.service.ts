import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginUser } from '../Models/LoginUser';
import { AuthUSer } from '../Models/AuthUSer';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  url:string='http://localhost:30411/api/authentication';
  constructor(private _http:HttpClient) {

   }
   login(user:LoginUser) {
    return this._http.post<AuthUSer>(`${this.url}/login`, user)
        // this is just the HTTP call,
        // we still need to handle the reception of the token
      }
}
