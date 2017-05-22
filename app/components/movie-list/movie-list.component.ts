import { Component, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef  }  from "@angular/core";
import { FormControl }        from "@angular/forms";
import { Http }               from '@angular/http';
import { Router }             from '@angular/router';
import { Observable }         from 'rxjs/Observable';
import { ObservableArray }    from "data/observable-array";

import { RadSideDrawerComponent, SideDrawerType } from "nativescript-telerik-ui/sidedrawer/angular";
import { RadSideDrawer }                          from 'nativescript-telerik-ui/sidedrawer';

import "rxjs/add/operator/map";
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { Movie,           
         MovieResponse,
         CategorySelection }  from "../../models";

import { MovieService,
         ReferenceDataService }   from '../../services';

@Component({
  selector: "movie-list",
  templateUrl: "./components/movie-list/movie-list.component.html",
  styleUrls: ["./components/movie-list/movie-list.component.css"]
})

export class MovieListComponent implements OnInit, AfterViewInit {
  
  private movies: ObservableArray<Movie>;
  private categories: ObservableArray<CategorySelection>;
  private searchTerm: FormControl;
  private selectedCategories: Array<string>;
  private PAGE_SIZE = 10;
  private currentPage = 1;

  public filterIcon = String.fromCharCode(parseInt('ea5b', 16));
  public hasCategoriesSelected: boolean;
  
  constructor(private http: Http, 
              private router: Router, 
              private movieService : MovieService, 
              private referenceDataService: ReferenceDataService,
              private _changeDetectionRef: ChangeDetectorRef){
  }

  @ViewChild(RadSideDrawerComponent) public drawerComponent: RadSideDrawerComponent;
  private drawer: RadSideDrawer;

  ngOnInit(){
    this.movies = new ObservableArray<Movie>();
    this.categories = new ObservableArray<CategorySelection>();
    this.searchTerm = new FormControl();
    this.selectedCategories = new Array<string>();

    this.getCategories();

    this.searchTerm.valueChanges
                  .debounceTime(500)
                  .subscribe(term => this.search());            
    
    this.searchTerm.setValue("");
  }
  
   ngAfterViewInit() {
     this.drawer = this.drawerComponent.sideDrawer;
     this._changeDetectionRef.detectChanges();
   }
   
  private search(): void {
    this.currentPage = 1;
    this.movies.splice(0);
    this.getMovies(this.searchTerm.value, 0, this.PAGE_SIZE);
  }

  private getMovies(searchTerm: string, skip: number, take: number) : void{
    this.movieService.searchForMovies(searchTerm, this.selectedCategories, skip, take)
        .subscribe(r => r.movies.forEach((movie) => this.movies.push(movie)));
  }

  private getCategories() : void {
    this.categories.splice(0);
    this.referenceDataService.getCategories().then(c => c.forEach((cat) => this.categories.push(new CategorySelection(cat, false))));
  }

  public goToDetail(movieId: number): void {
    let link = ['/detail', movieId];
    this.router.navigate(link);   
  }

  public listViewLoadMoreItems(){
    let skip = this.currentPage * this.PAGE_SIZE;
    let take = this.currentPage * this.PAGE_SIZE + this.PAGE_SIZE;
    this.currentPage = this.currentPage + 1;
    
    this.getMovies(this.searchTerm.value, skip, take);
  }

  public searchBarLoaded(event): void{
    if(event.object.android){
      event.object.dismissSoftInput();
      event.object.android.clearFocus();
      event.object.android.setFocusable(false);
    }
  }

  public searchBarChanged(term: String): void {
    this.searchTerm.setValue(term);
  }  

  public openDrawer() {
    this.drawer.showDrawer();
  }

  public onCloseDrawerTap() {
    this.drawer.closeDrawer();
    
    let newCategories = this.categories.filter(cat => cat.isSelected === true).map(cat => cat.category);
    
    if(!this.areSame(newCategories, this.selectedCategories)){
      this.selectedCategories = newCategories;
      this.search();
    } 

    this.hasCategoriesSelected = this.selectedCategories.length > 0;  
  }

  private areSame(array1: Array<string>, array2: Array<string>) : boolean {
    return (array1.length == array2.length) 
            && array1.every(function(element, index) {
              return element === array2[index]; 
            });
  };
  
  public toggleCategorySelection(selection: CategorySelection): void {
    if(selection.isSelected){
      selection.isSelected = false;
    }
    else{
      selection.isSelected = true;
    }
  }

  public clearCategorySelections(): void {
    this.categories.forEach(c => c.isSelected = false);    
    
    // force refresh...
    let firstCategory = this.categories.getItem(0);
    this.categories.setItem(0, firstCategory);
  }
}

