import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stripe-success',
  templateUrl: './stripe-success.component.html',
  styleUrls: ['./stripe-success.component.sass']
})
export class StripeSuccessComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    alert("¡Pago exitoso!✅");
    location.href="stripe/lista"
  }



}
