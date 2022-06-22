import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { STRIPE_KEYS } from '../interceptors/stripe_keys';
import { Stripe,loadStripe } from '@stripe/stripe-js'

@Injectable({
  providedIn: 'root'
})
export class StripeService {

  productsUrl:string = 'https://api.stripe.com/v1/products';
  pricesUrl:string = 'https://api.stripe.com/v1/prices';
  headers = new HttpHeaders({
    Authorization: `Bearer ${STRIPE_KEYS.secret}`
  });

  stripe:Stripe | null = null;

  constructor(private http: HttpClient) { }

  getProducts():Observable<any>{
    return this.http.get<any>(this.productsUrl,{headers:this.headers});
  }

  getPrices():Observable<any>{
    return this.http.get<any>(this.pricesUrl,{headers:this.headers});
  }

}
