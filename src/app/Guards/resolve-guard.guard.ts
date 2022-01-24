import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Resolve, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Company } from '../Models/company';

@Injectable({
  providedIn: 'root'
})
export class ResolveGuardGuard implements Resolve<Company> {
  company!:Company;
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Company {
    return this.company;
  }

}
