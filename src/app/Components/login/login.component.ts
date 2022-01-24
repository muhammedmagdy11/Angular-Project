import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LoginUser } from '../../Models/LoginUser';
import { AuthenticationService } from '../../Services/authentication.service';
import { AuthUSer } from '../../Models/AuthUSer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authservice:AuthenticationService,private router:Router) { }
  @ViewChild('validation',{read:ElementRef}) validation!: ElementRef;
user:LoginUser={userName:'',password:''};
tokenkeeper!:AuthUSer;
  ngOnInit(): void {
  }
  Login(){
this.authservice.login(this.user).subscribe(
  res=>{
  this.tokenkeeper=res;
  console.log(this.tokenkeeper.token);
  sessionStorage.setItem('token',this.tokenkeeper.token);
  sessionStorage.setItem('username',this.tokenkeeper.username);
  window.location.href='/';

},
()=>{
  this.validation.nativeElement.classList.remove('d-none');
});
  }
}
