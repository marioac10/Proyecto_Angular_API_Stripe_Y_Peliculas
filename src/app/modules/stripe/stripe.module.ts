import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StripeRoutingModule } from './stripe-routing.module';
import { StripeListComponent } from './pages/stripe-list/stripe-list.component';
import { StripeSuccessComponent } from './pages/stripe-success/stripe-success.component';
import { StripeCancelComponent } from './pages/stripe-cancel/stripe-cancel.component';


@NgModule({
  declarations: [
    StripeListComponent,
    StripeSuccessComponent,
    StripeCancelComponent
  ],
  imports: [
    CommonModule,
    StripeRoutingModule,
  ],
  
})
export class StripeModule { }
