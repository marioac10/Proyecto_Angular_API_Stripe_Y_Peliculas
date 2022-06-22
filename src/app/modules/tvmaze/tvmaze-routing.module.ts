import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TvmazeListComponent } from './pages/tvmaze-list/tvmaze-list.component';

const routes: Routes = [
  { path: 'lista', component: TvmazeListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TvmazeRoutingModule { }
