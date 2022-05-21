import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';

export class AuthInterceptorService implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler){
    console.log('the request is on way');
    if(sessionStorage.getItem('token')){
      const modifiedreq=req.clone({headers:req.headers.append('authorization',"Bearer "+sessionStorage.getItem('token'))});
      return next.handle(modifiedreq);
    }
    return next.handle(req);
  }
}
