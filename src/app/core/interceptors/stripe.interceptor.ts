import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { STRIPE_KEYS } from '../interceptors/stripe_keys';

@Injectable()
export class StripeInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // const headers = new HttpHeaders();
    // headers.append('Authorization:',`Bearer ${STRIPE_KEYS.secret}`);
    // console.log(STRIPE_KEYS.public);

    return next.handle(request);
  }
}
