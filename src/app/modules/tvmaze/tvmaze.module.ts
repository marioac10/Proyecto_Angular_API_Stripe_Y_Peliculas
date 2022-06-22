import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TvmazeRoutingModule } from './tvmaze-routing.module';
import { TvmazeListComponent } from './pages/tvmaze-list/tvmaze-list.component';
import { MoviePipe } from './pages/tvmaze-list/movie.pipe';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgxSpinnerModule } from 'ngx-spinner';



@NgModule({
  declarations: [
    TvmazeListComponent,
    MoviePipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    TvmazeRoutingModule,
    PaginationModule.forRoot(),
    ModalModule.forRoot(),
    NgxSpinnerModule
  ]
})
export class TvmazeModule { }
