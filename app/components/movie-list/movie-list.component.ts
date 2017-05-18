import { Component, OnInit }  from "@angular/core";
import { FormControl }        from "@angular/forms";
import { Http }               from '@angular/http';
import { Router }             from '@angular/router';
import { Observable }         from 'rxjs/Observable';
import { ObservableArray }    from "data/observable-array";

import "rxjs/add/operator/map";
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { Movie }          from "../../models";
import { MovieResponse }  from "../../models";

import { MovieService }   from '../../services';

@Component({
  selector: "movie-list",
  template: `    
    <StackLayout>
      <SearchBar #sb id="searchbar" hint="Search" (loaded)="searchBarLoaded($event)" (textChange)="searchBarChanged(sb.text)"></SearchBar>
      <ListView [items]="movies" (loadMoreItems)="listViewLoadMoreItems()" >
          <template let-item="item" let-odd="odd" let-even="even">
              <StackLayout [class.odd]="odd" [class.even]="even" (tap)="goToDetail(item.id); false">
                  <Label [text]='item.title' class="movieTitle"></Label>
                  <Label [text]="item.releaseYear + ' - ' + item.category + ' - ' + item.runningTime" class="movieDetail"></Label>
              </StackLayout>
          </template>
      </ListView>
    </StackLayout>
  `
})

export class MovieListComponent implements OnInit {
  
  private movies: ObservableArray<Movie>;
  private searchTerm: FormControl;
  private PAGE_SIZE = 10;
  private currentPage = 1;
  
  constructor(private http: Http, private router: Router, private movieService : MovieService){
  }

  ngOnInit(){
    this.movies = new ObservableArray<Movie>();
    this.searchTerm = new FormControl();

    this.searchTerm.valueChanges
                  .debounceTime(500)
                  .subscribe(term => this.search(term));            
    
    this.searchTerm.setValue("");
  }
  
  public listViewLoadMoreItems(){
    let skip = this.currentPage * this.PAGE_SIZE;
    let take = this.currentPage * this.PAGE_SIZE + this.PAGE_SIZE;
    this.currentPage = this.currentPage + 1;
    
    this.getMovies(this.searchTerm.value, skip, take).subscribe(r => r.movies.forEach((movie) => this.movies.push(movie)));
  }

  getMovies(searchTerm: string, skip: number, take: number): Observable<MovieResponse>{
    return this.movieService.searchForMovies(searchTerm, [], skip, take);
  }

  goToDetail(movieId: number): void {
    let link = ['/detail', movieId];
    this.router.navigate(link);   
  }

  searchBarLoaded(event): void{
    if(event.object.android){
      event.object.dismissSoftInput();
      event.object.android.clearFocus();
      event.object.android.setFocusable(false);
    }
  }

  searchBarChanged(term: String): void {
    this.searchTerm.setValue(term);
  }  

  search(term: String): void {
    this.currentPage = 1;
    this.movies.splice(0);
    this.getMovies(this.searchTerm.value, 0, 10)
        .subscribe(r => r.movies.forEach((movie) => this.movies.push(movie)));
  }

}

