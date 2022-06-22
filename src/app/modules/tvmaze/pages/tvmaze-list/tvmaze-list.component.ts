import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { PageChangedEvent } from 'ngx-bootstrap/pagination/pagination.component';
import { NgxSpinnerService } from 'ngx-spinner';
//import { NgxSpinnerService } from 'ngx-spinner/lib/ngx-spinner.service';
import { first } from 'rxjs';
import { CustomMovie } from 'src/app/core/models/tvmaze/customMovie';
import { MovieService } from 'src/app/core/services/movie.service';

@Component({
  selector: 'app-tvmaze-list',
  templateUrl: './tvmaze-list.component.html',
  styleUrls: ['./tvmaze-list.component.sass']
})
export class TvmazeListComponent implements OnInit {

  public movies: any = [];//Lista de movies

  //Pagination
  maxSize=10;
  currentPage = 1;
  //Total de movies
  totalTopMovies:number = 0;
  //Search movies
  public queryMovie = '';
  //Modal movie
  modalMovieRef?: BsModalRef;
  movieModal:any;

 
  

  constructor(private movieService: MovieService, private modalServiceMovie: BsModalService, private spinner: NgxSpinnerService) { }

  pageChanged(event: PageChangedEvent): void {
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 5000);

    if(this.queryMovie != ''){
      this.currentPage = event.page;
      this.searchMovies();
    }else{
      this.currentPage = event.page;
      let page = this.currentPage;
      this.loadData(page); 
    }
    
  }

  ngOnInit(): void {
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 5000);
    this.loadData(this.currentPage);
  }

  private loadData(page:number){
    this.movieService.getAll(page).subscribe(resp => {
      this.movies =  resp;
      this.totalTopMovies=10000;
    },error =>{
      console.error(error);
    });
  }

  //Buscar películas
  searchMovies(){
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 5000);
    let titleMovie = this.queryMovie;
    let page:number = this.currentPage;
    console.log(this.currentPage);
    if(titleMovie.length > 0){
      this.movieService.searchMovies(titleMovie,page).subscribe(resp =>{
        this.movies = resp;
        console.log(this.movies);
        this.totalTopMovies = resp[0].total_results;
      },error =>{
        console.error(error);
      });
    }else{
      this.loadData(1);
    }
  }

  getColor(vote:number) {
    if(vote>= 8){
        return 'green'
    }else if(vote >= 5){
        return "orange"
    }else{
        return 'red'
    }
  }

  openModalMovie(movieModal:any,templateModalMovie: TemplateRef<any>) {
    this.movieModal = movieModal;
    this.modalMovieRef = this.modalServiceMovie.show(templateModalMovie);
  }
  
  
  



}

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'modal-content-with-interceptor',
  template: `
    <div class="modal-header">
      <h4 class="modal-title pull-left">Modal with interceptor</h4>
      <button type="button" class="close btn-close pull-right" aria-label="Close" (click)="bsModalRef?.hide()">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">This modal has closing interceptor</div>
    <div class="modal-footer">
      <button type="button" class="btn btn-default" (click)="bsModalRef?.hide()">Close</button>
    </div>
  `
})

export class ModalContentWithInterceptorComponent {
  constructor(public bsModalRef: BsModalRef) { }
}
