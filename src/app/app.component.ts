import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username!:string;
  constructor(private router:Router){
    this.username=JSON.stringify(sessionStorage.getItem('username'));
    console.log(this.username!='null')
  }
  title = 'Crud Demo';
  name:string ='Ahmed';
  age:number =22;

  logout() {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('username');
    window.location.href = '/';
  }
}
