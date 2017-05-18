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
        templateUrl: "./components/movie-list/movie-list.component.html"
    }),
    __metadata("design:paramtypes", [http_1.Http, router_1.Router, services_1.MovieService])
], MovieListComponent);
exports.MovieListComponent = MovieListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW92aWUtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtb3ZpZS1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFtRDtBQUNuRCx3Q0FBb0Q7QUFDcEQsc0NBQW1EO0FBQ25ELDBDQUFxRDtBQUVyRCwwREFBMkQ7QUFFM0QsaUNBQStCO0FBQy9CLDBDQUF3QztBQUN4QyxrREFBZ0Q7QUFLaEQsMkNBQWdEO0FBT2hELElBQWEsa0JBQWtCO0lBTzdCLDRCQUFvQixJQUFVLEVBQVUsTUFBYyxFQUFVLFlBQTJCO1FBQXZFLFNBQUksR0FBSixJQUFJLENBQU07UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQWU7UUFIbkYsY0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNmLGdCQUFXLEdBQUcsQ0FBQyxDQUFDO0lBR3hCLENBQUM7SUFFRCxxQ0FBUSxHQUFSO1FBQUEsaUJBU0M7UUFSQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksa0NBQWUsRUFBUyxDQUFDO1FBQzNDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxtQkFBVyxFQUFFLENBQUM7UUFFcEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZO2FBQ2IsWUFBWSxDQUFDLEdBQUcsQ0FBQzthQUNqQixTQUFTLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFqQixDQUFpQixDQUFDLENBQUM7UUFFcEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVNLGtEQUFxQixHQUE1QjtRQUFBLGlCQU1DO1FBTEMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQzdDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQzlELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7UUFFeEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBQyxLQUFLLElBQUssT0FBQSxLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBdkIsQ0FBdUIsQ0FBQyxFQUFwRCxDQUFvRCxDQUFDLENBQUM7SUFDekgsQ0FBQztJQUVELHNDQUFTLEdBQVQsVUFBVSxVQUFrQixFQUFFLElBQVksRUFBRSxJQUFZO1FBQ3RELE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLGVBQWUsQ0FBQyxVQUFVLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBRUQsdUNBQVUsR0FBVixVQUFXLE9BQWU7UUFDeEIsSUFBSSxJQUFJLEdBQUcsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVELDRDQUFlLEdBQWYsVUFBZ0IsS0FBSztRQUNuQixFQUFFLENBQUEsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFBLENBQUM7WUFDdkIsS0FBSyxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1lBQ2hDLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ2xDLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMzQyxDQUFDO0lBQ0gsQ0FBQztJQUVELDZDQUFnQixHQUFoQixVQUFpQixJQUFZO1FBQzNCLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRCxtQ0FBTSxHQUFOLFVBQU8sSUFBWTtRQUFuQixpQkFLQztRQUpDLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQzthQUN2QyxTQUFTLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFDLEtBQUssSUFBSyxPQUFBLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUF2QixDQUF1QixDQUFDLEVBQXBELENBQW9ELENBQUMsQ0FBQztJQUM1RSxDQUFDO0lBRUgseUJBQUM7QUFBRCxDQUFDLEFBekRELElBeURDO0FBekRZLGtCQUFrQjtJQUw5QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFlBQVk7UUFDdEIsV0FBVyxFQUFFLG1EQUFtRDtLQUNqRSxDQUFDO3FDQVMwQixXQUFJLEVBQWtCLGVBQU0sRUFBeUIsdUJBQVk7R0FQaEYsa0JBQWtCLENBeUQ5QjtBQXpEWSxnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9ICBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBGb3JtQ29udHJvbCB9ICAgICAgICBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgSHR0cCB9ICAgICAgICAgICAgICAgZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCB7IFJvdXRlciB9ICAgICAgICAgICAgIGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSAgICAgICAgIGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGVBcnJheSB9ICAgIGZyb20gXCJkYXRhL29ic2VydmFibGUtYXJyYXlcIjtcclxuXHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2RlYm91bmNlVGltZSc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZGlzdGluY3RVbnRpbENoYW5nZWQnO1xyXG5cclxuaW1wb3J0IHsgTW92aWUgfSAgICAgICAgICBmcm9tIFwiLi4vLi4vbW9kZWxzXCI7XHJcbmltcG9ydCB7IE1vdmllUmVzcG9uc2UgfSAgZnJvbSBcIi4uLy4uL21vZGVsc1wiO1xyXG5cclxuaW1wb3J0IHsgTW92aWVTZXJ2aWNlIH0gICBmcm9tICcuLi8uLi9zZXJ2aWNlcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJtb3ZpZS1saXN0XCIsXHJcbiAgdGVtcGxhdGVVcmw6IFwiLi9jb21wb25lbnRzL21vdmllLWxpc3QvbW92aWUtbGlzdC5jb21wb25lbnQuaHRtbFwiICBcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBNb3ZpZUxpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIFxyXG4gIHByaXZhdGUgbW92aWVzOiBPYnNlcnZhYmxlQXJyYXk8TW92aWU+O1xyXG4gIHByaXZhdGUgc2VhcmNoVGVybTogRm9ybUNvbnRyb2w7XHJcbiAgcHJpdmF0ZSBQQUdFX1NJWkUgPSAxMDtcclxuICBwcml2YXRlIGN1cnJlbnRQYWdlID0gMTtcclxuICBcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHAsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgbW92aWVTZXJ2aWNlIDogTW92aWVTZXJ2aWNlKXtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCl7XHJcbiAgICB0aGlzLm1vdmllcyA9IG5ldyBPYnNlcnZhYmxlQXJyYXk8TW92aWU+KCk7XHJcbiAgICB0aGlzLnNlYXJjaFRlcm0gPSBuZXcgRm9ybUNvbnRyb2woKTtcclxuXHJcbiAgICB0aGlzLnNlYXJjaFRlcm0udmFsdWVDaGFuZ2VzXHJcbiAgICAgICAgICAgICAgICAgIC5kZWJvdW5jZVRpbWUoNTAwKVxyXG4gICAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKHRlcm0gPT4gdGhpcy5zZWFyY2godGVybSkpOyAgICAgICAgICAgIFxyXG4gICAgXHJcbiAgICB0aGlzLnNlYXJjaFRlcm0uc2V0VmFsdWUoXCJcIik7XHJcbiAgfVxyXG4gIFxyXG4gIHB1YmxpYyBsaXN0Vmlld0xvYWRNb3JlSXRlbXMoKXtcclxuICAgIGxldCBza2lwID0gdGhpcy5jdXJyZW50UGFnZSAqIHRoaXMuUEFHRV9TSVpFO1xyXG4gICAgbGV0IHRha2UgPSB0aGlzLmN1cnJlbnRQYWdlICogdGhpcy5QQUdFX1NJWkUgKyB0aGlzLlBBR0VfU0laRTtcclxuICAgIHRoaXMuY3VycmVudFBhZ2UgPSB0aGlzLmN1cnJlbnRQYWdlICsgMTtcclxuICAgIFxyXG4gICAgdGhpcy5nZXRNb3ZpZXModGhpcy5zZWFyY2hUZXJtLnZhbHVlLCBza2lwLCB0YWtlKS5zdWJzY3JpYmUociA9PiByLm1vdmllcy5mb3JFYWNoKChtb3ZpZSkgPT4gdGhpcy5tb3ZpZXMucHVzaChtb3ZpZSkpKTtcclxuICB9XHJcblxyXG4gIGdldE1vdmllcyhzZWFyY2hUZXJtOiBzdHJpbmcsIHNraXA6IG51bWJlciwgdGFrZTogbnVtYmVyKTogT2JzZXJ2YWJsZTxNb3ZpZVJlc3BvbnNlPntcclxuICAgIHJldHVybiB0aGlzLm1vdmllU2VydmljZS5zZWFyY2hGb3JNb3ZpZXMoc2VhcmNoVGVybSwgW10sIHNraXAsIHRha2UpO1xyXG4gIH1cclxuXHJcbiAgZ29Ub0RldGFpbChtb3ZpZUlkOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGxldCBsaW5rID0gWycvZGV0YWlsJywgbW92aWVJZF07XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShsaW5rKTsgICBcclxuICB9XHJcblxyXG4gIHNlYXJjaEJhckxvYWRlZChldmVudCk6IHZvaWR7XHJcbiAgICBpZihldmVudC5vYmplY3QuYW5kcm9pZCl7XHJcbiAgICAgIGV2ZW50Lm9iamVjdC5kaXNtaXNzU29mdElucHV0KCk7XHJcbiAgICAgIGV2ZW50Lm9iamVjdC5hbmRyb2lkLmNsZWFyRm9jdXMoKTtcclxuICAgICAgZXZlbnQub2JqZWN0LmFuZHJvaWQuc2V0Rm9jdXNhYmxlKGZhbHNlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNlYXJjaEJhckNoYW5nZWQodGVybTogU3RyaW5nKTogdm9pZCB7XHJcbiAgICB0aGlzLnNlYXJjaFRlcm0uc2V0VmFsdWUodGVybSk7XHJcbiAgfSAgXHJcblxyXG4gIHNlYXJjaCh0ZXJtOiBTdHJpbmcpOiB2b2lkIHtcclxuICAgIHRoaXMuY3VycmVudFBhZ2UgPSAxO1xyXG4gICAgdGhpcy5tb3ZpZXMuc3BsaWNlKDApO1xyXG4gICAgdGhpcy5nZXRNb3ZpZXModGhpcy5zZWFyY2hUZXJtLnZhbHVlLCAwLCAxMClcclxuICAgICAgICAuc3Vic2NyaWJlKHIgPT4gci5tb3ZpZXMuZm9yRWFjaCgobW92aWUpID0+IHRoaXMubW92aWVzLnB1c2gobW92aWUpKSk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuIl19