import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';

export class AuthInterceptorService implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler){
    console.log('the request is on way');
const modifiedreq=req.clone({headers:req.headers.append('authorization',"Bearer "+sessionStorage.getItem('token'))});
    return next.handle(modifiedreq);
  }
}
