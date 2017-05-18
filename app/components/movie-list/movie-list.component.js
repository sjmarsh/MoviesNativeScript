"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var observable_array_1 = require("data/observable-array");
require("rxjs/add/operator/map");
require("rxjs/add/operator/debounceTime");
require("rxjs/add/operator/distinctUntilChanged");
var services_1 = require("../../services");
var MovieListComponent = (function () {
    function MovieListComponent(http, router, movieService) {
        this.http = http;
        this.router = router;
        this.movieService = movieService;
        this.PAGE_SIZE = 10;
        this.currentPage = 1;
    }
    MovieListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.movies = new observable_array_1.ObservableArray();
        this.searchTerm = new forms_1.FormControl();
        this.searchTerm.valueChanges
            .debounceTime(500)
            .subscribe(function (term) { return _this.search(term); });
        this.searchTerm.setValue("");
    };
    MovieListComponent.prototype.listViewLoadMoreItems = function () {
        var _this = this;
        var skip = this.currentPage * this.PAGE_SIZE;
        var take = this.currentPage * this.PAGE_SIZE + this.PAGE_SIZE;
        this.currentPage = this.currentPage + 1;
        this.getMovies(this.searchTerm.value, skip, take).subscribe(function (r) { return r.movies.forEach(function (movie) { return _this.movies.push(movie); }); });
    };
    MovieListComponent.prototype.getMovies = function (searchTerm, skip, take) {
        return this.movieService.searchForMovies(searchTerm, [], skip, take);
    };
    MovieListComponent.prototype.goToDetail = function (movieId) {
        var link = ['/detail', movieId];
        this.router.navigate(link);
    };
    MovieListComponent.prototype.searchBarLoaded = function (event) {
        if (event.object.android) {
            event.object.dismissSoftInput();
            event.object.android.clearFocus();
            event.object.android.setFocusable(false);
        }
    };
    MovieListComponent.prototype.searchBarChanged = function (term) {
        this.searchTerm.setValue(term);
    };
    MovieListComponent.prototype.search = function (term) {
        var _this = this;
        this.currentPage = 1;
        this.movies.splice(0);
        this.getMovies(this.searchTerm.value, 0, 10)
            .subscribe(function (r) { return r.movies.forEach(function (movie) { return _this.movies.push(movie); }); });
    };
    return MovieListComponent;
}());
MovieListComponent = __decorate([
    core_1.Component({
        selector: "movie-list",
        template: "    \n    <StackLayout>\n      <SearchBar #sb id=\"searchbar\" hint=\"Search\" (loaded)=\"searchBarLoaded($event)\" (textChange)=\"searchBarChanged(sb.text)\"></SearchBar>\n      <ListView [items]=\"movies\" (loadMoreItems)=\"listViewLoadMoreItems()\" >\n          <template let-item=\"item\" let-odd=\"odd\" let-even=\"even\">\n              <StackLayout [class.odd]=\"odd\" [class.even]=\"even\" (tap)=\"goToDetail(item.id); false\">\n                  <Label [text]='item.title' class=\"movieTitle\"></Label>\n                  <Label [text]=\"item.releaseYear + ' - ' + item.category + ' - ' + item.runningTime\" class=\"movieDetail\"></Label>\n              </StackLayout>\n          </template>\n      </ListView>\n    </StackLayout>\n  "
    }),
    __metadata("design:paramtypes", [http_1.Http, router_1.Router, services_1.MovieService])
], MovieListComponent);
exports.MovieListComponent = MovieListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW92aWUtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtb3ZpZS1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFtRDtBQUNuRCx3Q0FBb0Q7QUFDcEQsc0NBQW1EO0FBQ25ELDBDQUFxRDtBQUVyRCwwREFBMkQ7QUFFM0QsaUNBQStCO0FBQy9CLDBDQUF3QztBQUN4QyxrREFBZ0Q7QUFLaEQsMkNBQWdEO0FBbUJoRCxJQUFhLGtCQUFrQjtJQU83Qiw0QkFBb0IsSUFBVSxFQUFVLE1BQWMsRUFBVSxZQUEyQjtRQUF2RSxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFlO1FBSG5GLGNBQVMsR0FBRyxFQUFFLENBQUM7UUFDZixnQkFBVyxHQUFHLENBQUMsQ0FBQztJQUd4QixDQUFDO0lBRUQscUNBQVEsR0FBUjtRQUFBLGlCQVNDO1FBUkMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLGtDQUFlLEVBQVMsQ0FBQztRQUMzQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksbUJBQVcsRUFBRSxDQUFDO1FBRXBDLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWTthQUNiLFlBQVksQ0FBQyxHQUFHLENBQUM7YUFDakIsU0FBUyxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBakIsQ0FBaUIsQ0FBQyxDQUFDO1FBRXBELElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFTSxrREFBcUIsR0FBNUI7UUFBQSxpQkFNQztRQUxDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUM3QyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUM5RCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO1FBRXhDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQUMsS0FBSyxJQUFLLE9BQUEsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQXZCLENBQXVCLENBQUMsRUFBcEQsQ0FBb0QsQ0FBQyxDQUFDO0lBQ3pILENBQUM7SUFFRCxzQ0FBUyxHQUFULFVBQVUsVUFBa0IsRUFBRSxJQUFZLEVBQUUsSUFBWTtRQUN0RCxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxlQUFlLENBQUMsVUFBVSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDdkUsQ0FBQztJQUVELHVDQUFVLEdBQVYsVUFBVyxPQUFlO1FBQ3hCLElBQUksSUFBSSxHQUFHLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFRCw0Q0FBZSxHQUFmLFVBQWdCLEtBQUs7UUFDbkIsRUFBRSxDQUFBLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQSxDQUFDO1lBQ3ZCLEtBQUssQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztZQUNoQyxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUNsQyxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDM0MsQ0FBQztJQUNILENBQUM7SUFFRCw2Q0FBZ0IsR0FBaEIsVUFBaUIsSUFBWTtRQUMzQixJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUQsbUNBQU0sR0FBTixVQUFPLElBQVk7UUFBbkIsaUJBS0M7UUFKQyxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztRQUNyQixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7YUFDdkMsU0FBUyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBQyxLQUFLLElBQUssT0FBQSxLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBdkIsQ0FBdUIsQ0FBQyxFQUFwRCxDQUFvRCxDQUFDLENBQUM7SUFDNUUsQ0FBQztJQUVILHlCQUFDO0FBQUQsQ0FBQyxBQXpERCxJQXlEQztBQXpEWSxrQkFBa0I7SUFqQjlCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsWUFBWTtRQUN0QixRQUFRLEVBQUUseXVCQVlUO0tBQ0YsQ0FBQztxQ0FTMEIsV0FBSSxFQUFrQixlQUFNLEVBQXlCLHVCQUFZO0dBUGhGLGtCQUFrQixDQXlEOUI7QUF6RFksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSAgZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRm9ybUNvbnRyb2wgfSAgICAgICAgZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IEh0dHAgfSAgICAgICAgICAgICAgIGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSAgICAgICAgICAgICBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gICAgICAgICBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlQXJyYXkgfSAgICBmcm9tIFwiZGF0YS9vYnNlcnZhYmxlLWFycmF5XCI7XHJcblxyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9kZWJvdW5jZVRpbWUnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2Rpc3RpbmN0VW50aWxDaGFuZ2VkJztcclxuXHJcbmltcG9ydCB7IE1vdmllIH0gICAgICAgICAgZnJvbSBcIi4uLy4uL21vZGVsc1wiO1xyXG5pbXBvcnQgeyBNb3ZpZVJlc3BvbnNlIH0gIGZyb20gXCIuLi8uLi9tb2RlbHNcIjtcclxuXHJcbmltcG9ydCB7IE1vdmllU2VydmljZSB9ICAgZnJvbSAnLi4vLi4vc2VydmljZXMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwibW92aWUtbGlzdFwiLFxyXG4gIHRlbXBsYXRlOiBgICAgIFxyXG4gICAgPFN0YWNrTGF5b3V0PlxyXG4gICAgICA8U2VhcmNoQmFyICNzYiBpZD1cInNlYXJjaGJhclwiIGhpbnQ9XCJTZWFyY2hcIiAobG9hZGVkKT1cInNlYXJjaEJhckxvYWRlZCgkZXZlbnQpXCIgKHRleHRDaGFuZ2UpPVwic2VhcmNoQmFyQ2hhbmdlZChzYi50ZXh0KVwiPjwvU2VhcmNoQmFyPlxyXG4gICAgICA8TGlzdFZpZXcgW2l0ZW1zXT1cIm1vdmllc1wiIChsb2FkTW9yZUl0ZW1zKT1cImxpc3RWaWV3TG9hZE1vcmVJdGVtcygpXCIgPlxyXG4gICAgICAgICAgPHRlbXBsYXRlIGxldC1pdGVtPVwiaXRlbVwiIGxldC1vZGQ9XCJvZGRcIiBsZXQtZXZlbj1cImV2ZW5cIj5cclxuICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgW2NsYXNzLm9kZF09XCJvZGRcIiBbY2xhc3MuZXZlbl09XCJldmVuXCIgKHRhcCk9XCJnb1RvRGV0YWlsKGl0ZW0uaWQpOyBmYWxzZVwiPlxyXG4gICAgICAgICAgICAgICAgICA8TGFiZWwgW3RleHRdPSdpdGVtLnRpdGxlJyBjbGFzcz1cIm1vdmllVGl0bGVcIj48L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8TGFiZWwgW3RleHRdPVwiaXRlbS5yZWxlYXNlWWVhciArICcgLSAnICsgaXRlbS5jYXRlZ29yeSArICcgLSAnICsgaXRlbS5ydW5uaW5nVGltZVwiIGNsYXNzPVwibW92aWVEZXRhaWxcIj48L0xhYmVsPlxyXG4gICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XHJcbiAgICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICA8L0xpc3RWaWV3PlxyXG4gICAgPC9TdGFja0xheW91dD5cclxuICBgXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTW92aWVMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBcclxuICBwcml2YXRlIG1vdmllczogT2JzZXJ2YWJsZUFycmF5PE1vdmllPjtcclxuICBwcml2YXRlIHNlYXJjaFRlcm06IEZvcm1Db250cm9sO1xyXG4gIHByaXZhdGUgUEFHRV9TSVpFID0gMTA7XHJcbiAgcHJpdmF0ZSBjdXJyZW50UGFnZSA9IDE7XHJcbiAgXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwLCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIG1vdmllU2VydmljZSA6IE1vdmllU2VydmljZSl7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpe1xyXG4gICAgdGhpcy5tb3ZpZXMgPSBuZXcgT2JzZXJ2YWJsZUFycmF5PE1vdmllPigpO1xyXG4gICAgdGhpcy5zZWFyY2hUZXJtID0gbmV3IEZvcm1Db250cm9sKCk7XHJcblxyXG4gICAgdGhpcy5zZWFyY2hUZXJtLnZhbHVlQ2hhbmdlc1xyXG4gICAgICAgICAgICAgICAgICAuZGVib3VuY2VUaW1lKDUwMClcclxuICAgICAgICAgICAgICAgICAgLnN1YnNjcmliZSh0ZXJtID0+IHRoaXMuc2VhcmNoKHRlcm0pKTsgICAgICAgICAgICBcclxuICAgIFxyXG4gICAgdGhpcy5zZWFyY2hUZXJtLnNldFZhbHVlKFwiXCIpO1xyXG4gIH1cclxuICBcclxuICBwdWJsaWMgbGlzdFZpZXdMb2FkTW9yZUl0ZW1zKCl7XHJcbiAgICBsZXQgc2tpcCA9IHRoaXMuY3VycmVudFBhZ2UgKiB0aGlzLlBBR0VfU0laRTtcclxuICAgIGxldCB0YWtlID0gdGhpcy5jdXJyZW50UGFnZSAqIHRoaXMuUEFHRV9TSVpFICsgdGhpcy5QQUdFX1NJWkU7XHJcbiAgICB0aGlzLmN1cnJlbnRQYWdlID0gdGhpcy5jdXJyZW50UGFnZSArIDE7XHJcbiAgICBcclxuICAgIHRoaXMuZ2V0TW92aWVzKHRoaXMuc2VhcmNoVGVybS52YWx1ZSwgc2tpcCwgdGFrZSkuc3Vic2NyaWJlKHIgPT4gci5tb3ZpZXMuZm9yRWFjaCgobW92aWUpID0+IHRoaXMubW92aWVzLnB1c2gobW92aWUpKSk7XHJcbiAgfVxyXG5cclxuICBnZXRNb3ZpZXMoc2VhcmNoVGVybTogc3RyaW5nLCBza2lwOiBudW1iZXIsIHRha2U6IG51bWJlcik6IE9ic2VydmFibGU8TW92aWVSZXNwb25zZT57XHJcbiAgICByZXR1cm4gdGhpcy5tb3ZpZVNlcnZpY2Uuc2VhcmNoRm9yTW92aWVzKHNlYXJjaFRlcm0sIFtdLCBza2lwLCB0YWtlKTtcclxuICB9XHJcblxyXG4gIGdvVG9EZXRhaWwobW92aWVJZDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBsZXQgbGluayA9IFsnL2RldGFpbCcsIG1vdmllSWRdO1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUobGluayk7ICAgXHJcbiAgfVxyXG5cclxuICBzZWFyY2hCYXJMb2FkZWQoZXZlbnQpOiB2b2lke1xyXG4gICAgaWYoZXZlbnQub2JqZWN0LmFuZHJvaWQpe1xyXG4gICAgICBldmVudC5vYmplY3QuZGlzbWlzc1NvZnRJbnB1dCgpO1xyXG4gICAgICBldmVudC5vYmplY3QuYW5kcm9pZC5jbGVhckZvY3VzKCk7XHJcbiAgICAgIGV2ZW50Lm9iamVjdC5hbmRyb2lkLnNldEZvY3VzYWJsZShmYWxzZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZWFyY2hCYXJDaGFuZ2VkKHRlcm06IFN0cmluZyk6IHZvaWQge1xyXG4gICAgdGhpcy5zZWFyY2hUZXJtLnNldFZhbHVlKHRlcm0pO1xyXG4gIH0gIFxyXG5cclxuICBzZWFyY2godGVybTogU3RyaW5nKTogdm9pZCB7XHJcbiAgICB0aGlzLmN1cnJlbnRQYWdlID0gMTtcclxuICAgIHRoaXMubW92aWVzLnNwbGljZSgwKTtcclxuICAgIHRoaXMuZ2V0TW92aWVzKHRoaXMuc2VhcmNoVGVybS52YWx1ZSwgMCwgMTApXHJcbiAgICAgICAgLnN1YnNjcmliZShyID0+IHIubW92aWVzLmZvckVhY2goKG1vdmllKSA9PiB0aGlzLm1vdmllcy5wdXNoKG1vdmllKSkpO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbiJdfQ==