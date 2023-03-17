import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthServiceService } from '../Services/auth-service.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authservice: AuthServiceService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    var reqWithToken = request
    let token = this.authservice.isLoggedIn();
    let userId= this.authservice.getUserId();
    // console.log(token)
    // console.log(userId)
    if (token) {
      // console.log('hi')
      let header = new HttpHeaders({
        Authorization: `Bearer ${token}`,
        userid:` ${userId}`

      })
      reqWithToken = request.clone({ headers:header })
      return next.handle(reqWithToken);

    }
    return next.handle(reqWithToken);
  }
}
