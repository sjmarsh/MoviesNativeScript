import { Injectable }     from '@angular/core';
import { Headers, Http }  from '@angular/http';
import { Observable }     from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Movie }            from '../models';
import { SearchCriteria }   from '../models';
import { MovieResponse }    from '../models';
import { CurrentSearch }    from '../models';

import { EnvironmentConfig }  from './environment-config';

@Injectable()
export class MovieService {

  private baseUrl = '';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http, private config: EnvironmentConfig){  
    this.baseUrl = config.movieApiUrl() + '/api/movies';
  }

  searchForMoviesWithCriteria(criteria: SearchCriteria) : Observable<MovieResponse>{
    return this.searchForMovies(criteria.searchTerm, criteria.selectedCategories, criteria.currentSkipSize, criteria.currentTakeSize);
  }
  
  searchForMovies(term: string, categories: Array<string>, skip: number, take: number) : Observable<MovieResponse>{    
    var categoryList = '';
    if(categories && categories.length > 0)
    {
      for(let category of categories){
        categoryList += '&categories='+ category;
      }
    } 
    
    term = term.replace(' ', '%20');

    return this.http.get(`${this.baseUrl}?searchFilter=${term}${categoryList}&skip=${skip}&take=${take}`)
                    .map((response) => response.json());
                    //.catch(this.handleError);
  }

  getMovie(movieId: number): Promise<Movie> {
    let url = `${this.baseUrl}/${movieId}`;
    return this.http.get(url)
               .toPromise()
               .then(response => response.json() as Movie)
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // todo: log
    return Promise.reject(error.message || error);
  }
}