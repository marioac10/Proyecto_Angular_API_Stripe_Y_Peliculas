import { Pipe, PipeTransform } from '@angular/core';
import { finalize, first, Subject, tap } from 'rxjs';
import { CustomMovie } from 'src/app/core/models/tvmaze/customMovie';
import { MovieService } from 'src/app/core/services/movie.service';

@Pipe({
  name: 'moviePipe'
})
export class MoviePipe implements PipeTransform {
  
  listMovies:any = [];
 
  constructor(private movieService: MovieService){}

  transform(value: Array<CustomMovie>, currentPage:number): any {
    console.log("Current page: --->"+currentPage);
    // var lista: any = [];
    // const hola = this.movieService.getAll(currentPage).pipe().subscribe((resp) => {
    //   lista = resp
    //   console.log(lista);
    //   return lista;
    // });
    return value;
    
    //return value;
    // console.log(search);
    // //console.log('value: '+value);
    // //let val = value;
    // //console.log("valueee:"+value);
    // if(search !== undefined && search.trim().length === 0)
    //   //val = value?.filter(x => x.name.includes(query));
    //   return value?.slice(page,page+50);
    //   //value = value?.filter(x => x.name.includes(search?.toLocaleLowerCase()));
    
    
    // const filterPokemones = value?.filter(x => x.name.includes(search?.toLocaleLowerCase()));
    
    // return filterPokemones?.slice(page,page+50);
  }

}
