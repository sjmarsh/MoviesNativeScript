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
  template: `   
    <GridLayout columns="*, *" rows="*, *, *, *, *, *, *, *" margin="5, 5, 5, 5">
        <Label text="Title" row="0" col="0" ></Label>
        <Label text="{{movieDetail.title}}" row="0" col="1"></Label>
        <Label text="Release Year" row="1" col="0"></Label>
        <Label text="{{movieDetail.releaseYear}}" row="1" col="1"></Label>
        <Label text="Category" row="2" col="0"></Label>
        <Label text="{{movieDetail.category}}" row="2" col="1"></Label>
        <Label text="Classification" row="3" col="0"></Label>
        <Label text="{{movieDetail.classification}}" row="3" col="1"></Label>
        <Label text="Format" row="4" col="0"></Label>
        <Label text="{{movieDetail.format}}" row="4" col="1"></Label>
        <Label text="Running Time" row="5" col="0"></Label>
        <Label text="{{movieDetail.runningTime}}" row="5" col="1"></Label>
        <Label text="TV Recording" row="6" col="0"></Label>
        <Label text="{{movieDetail.tvRecording}}" row="6" col="1"></Label>
        <Label text="Date Added" row="7" col="0"></Label>
        <Label text="{{movieDetail.dateAdded}}" row="7" col="1"></Label>
    </GridLayout>
  `
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
