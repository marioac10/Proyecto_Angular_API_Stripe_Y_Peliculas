import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StripeCancelComponent } from './pages/stripe-cancel/stripe-cancel.component';
import { StripeListComponent } from './pages/stripe-list/stripe-list.component';
import { StripeSuccessComponent } from './pages/stripe-success/stripe-success.component';


const routes: Routes = [
  { path: 'lista', component: StripeListComponent },
  { path: 'success', component: StripeSuccessComponent},
  { path: 'cancel', component: StripeCancelComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StripeRoutingModule { }
