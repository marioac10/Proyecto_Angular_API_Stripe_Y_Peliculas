import { Component, OnInit } from '@angular/core';
import { first, forkJoin, observable, Observable } from 'rxjs';
import { STRIPE_KEYS } from 'src/app/core/interceptors/stripe_keys';
import { CustomProduct } from 'src/app/core/models/stripe/customProduct';
import { StripeService } from 'src/app/core/services/stripe.service';
import { Stripe,loadStripe } from '@stripe/stripe-js'
import { Router } from '@angular/router';


@Component({
  selector: 'app-stripe-list',
  templateUrl: './stripe-list.component.html',
  styleUrls: ['./stripe-list.component.sass']
})
export class StripeListComponent implements OnInit {

  Products:any[] = [];
  stripe:Stripe | null = null;
  constructor(private stripeService: StripeService, private router:Router) { }

  ngOnInit(): void {
    this.loadData();
    loadStripe(STRIPE_KEYS.public).then(data=>{
      this.stripe = data;
      
    });
  }

  moneyFormat = (num:string) => `$${num.slice(0,-2)}.${num.slice(-2)}`;
  private loadData(){
    let products:Observable<any> = this.stripeService.getProducts();
    let prices:Observable<any> = this.stripeService.getPrices();

    forkJoin([products,prices]).subscribe(resp =>{
      let listProducts:any[] = resp[0].data;
      let listPrices:any[] = resp[1].data;
      console.log(listProducts);
      console.log(listPrices)

      listPrices.forEach(el => {
        let productData = listProducts.filter(product=>product.id === el.product);
        this.Products.push(new CustomProduct(
          el.id,
          productData[0].images[0],
          productData[0].name,
          this.moneyFormat(el.unit_amount_decimal)
        ));
      });
    });
  }
  
  pagoStripe(producto:any){
    let price = producto.getAttribute("data-price");
    let priceId:string = price!.toString();
    console.log(priceId);
    this.stripe?.redirectToCheckout({
      lineItems: [{price: priceId, quantity: 1}],
      mode: "subscription",
      successUrl: `http://localhost:4200/stripe/success`,
      cancelUrl: `http://localhost:4200/stripe/cancel`
    });
  }

}
