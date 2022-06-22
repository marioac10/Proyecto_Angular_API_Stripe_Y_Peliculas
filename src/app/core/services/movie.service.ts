import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, observable, Observable } from 'rxjs';
import { CustomMovie } from '../models/tvmaze/customMovie';
import { RequestTvmaze } from '../models/tvmaze/movies';
import { API_KEY } from './api_key';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private BASE_URL: string = 'https://api.themoviedb.org/3';
  private API_URL: string = this.BASE_URL+'/discover/movie?sort_by=popularity.desc';
  private IMG_URL: string = 'https://image.tmdb.org/t/p/w300';
  private SEARCH_URL: string = this.BASE_URL+'/search/movie?api_key='+API_KEY;
  private headers = new HttpHeaders({
    'Authorization': `Bearer ${API_KEY}`,
    'Content-Type': 'application/json; charset=utf-8'
  });

  constructor(private http: HttpClient) { }

  getAll(page:number):Observable<CustomMovie[]>{
    let params = new HttpParams().append('api_key',`${API_KEY}`);
    params = params.append('page',`${page}`);
    let url:string = `${this.API_URL}`;
    return this.http.get<RequestTvmaze>(url,{params:params}).pipe(map(resp => this.transformMovie(resp)));
  }

  private transformMovie(response: RequestTvmaze):CustomMovie[]{
    let total_results:number = response.total_results;
    let image: string;
    let movieList:CustomMovie[] = response.results?.map( movie =>{
      image = `${this.IMG_URL+movie.poster_path}`;
      return new CustomMovie(
        image,
        movie.title,
        movie.vote_average,
        movie.overview,
        total_results
      );
    });

    return movieList;
  }

  searchMovies(titleMovie:string,page:number): Observable<CustomMovie[]>{
    let url:string = `${this.SEARCH_URL}&query=${titleMovie}&page=${page}`;

    let observable = this.http.get<RequestTvmaze>(url).pipe(map(resp => this.transformMovie(resp)));
    return observable;
  }




}
