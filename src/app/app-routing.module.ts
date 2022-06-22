import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  { path: 'stripe', loadChildren: () => import('./modules/stripe/stripe.module').then(m => m.StripeModule) },
  { path: 'tvmaze', loadChildren: () => import('./modules/tvmaze/tvmaze.module').then(m => m.TvmazeModule) },
  { path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
