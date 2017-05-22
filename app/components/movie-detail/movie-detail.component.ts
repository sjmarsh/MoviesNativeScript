import { Component, OnInit }      from "@angular/core";
import { Http }                   from '@angular/http';
import { ActivatedRoute, Params } from '@angular/router';
import { Router }                 from '@angular/router';
import { Observable }             from 'rxjs/Observable';

import "rxjs/add/operator/map";
import "rxjs/add/operator/switchMap";

import { Movie }          from "../../models";
import { MovieResponse }  from "../../models";
import { MovieService }   from "../../services";

@Component({
  selector: "movie-detail",
  templateUrl: "./components/movie-detail/movie-detail.component.html",
  styleUrls: ["./components/movie-detail/movie-detail.component.css"]
})

export class MovieDetailComponent implements OnInit {
  
  constructor(private route: ActivatedRoute,
              private router: Router, 
              private movieService: MovieService) {
  }
  
  movieDetail = new Movie();

  ngOnInit() {
    
    this.route.params
      .switchMap((params: Params) => this.movieService.getMovie(+params['id']) )
      .subscribe(movie => this.movieDetail = movie);
  }

  backToList(){
    this.router.navigate(['/home']);
  }
}
