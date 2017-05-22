"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("@angular/router");
require("rxjs/add/operator/map");
require("rxjs/add/operator/switchMap");
var models_1 = require("../../models");
var services_1 = require("../../services");
var MovieDetailComponent = (function () {
    function MovieDetailComponent(route, router, movieService) {
        this.route = route;
        this.router = router;
        this.movieService = movieService;
        this.movieDetail = new models_1.Movie();
    }
    MovieDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.movieService.getMovie(+params['id']); })
            .subscribe(function (movie) { return _this.movieDetail = movie; });
    };
    MovieDetailComponent.prototype.backToList = function () {
        this.router.navigate(['/home']);
    };
    return MovieDetailComponent;
}());
MovieDetailComponent = __decorate([
    core_1.Component({
        selector: "movie-detail",
        templateUrl: "./components/movie-detail/movie-detail.component.html",
        styleUrls: ["./components/movie-detail/movie-detail.component.css"]
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_2.Router,
        services_1.MovieService])
], MovieDetailComponent);
exports.MovieDetailComponent = MovieDetailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW92aWUtZGV0YWlsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1vdmllLWRldGFpbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBdUQ7QUFFdkQsMENBQXlEO0FBQ3pELDBDQUF5RDtBQUd6RCxpQ0FBK0I7QUFDL0IsdUNBQXFDO0FBRXJDLHVDQUE4QztBQUU5QywyQ0FBZ0Q7QUFRaEQsSUFBYSxvQkFBb0I7SUFFL0IsOEJBQW9CLEtBQXFCLEVBQ3JCLE1BQWMsRUFDZCxZQUEwQjtRQUYxQixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsaUJBQVksR0FBWixZQUFZLENBQWM7UUFHOUMsZ0JBQVcsR0FBRyxJQUFJLGNBQUssRUFBRSxDQUFDO0lBRjFCLENBQUM7SUFJRCx1Q0FBUSxHQUFSO1FBQUEsaUJBS0M7UUFIQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU07YUFDZCxTQUFTLENBQUMsVUFBQyxNQUFjLElBQUssT0FBQSxLQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUF6QyxDQUF5QyxDQUFFO2FBQ3pFLFNBQVMsQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxFQUF4QixDQUF3QixDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVELHlDQUFVLEdBQVY7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUNILDJCQUFDO0FBQUQsQ0FBQyxBQW5CRCxJQW1CQztBQW5CWSxvQkFBb0I7SUFOaEMsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxjQUFjO1FBQ3hCLFdBQVcsRUFBRSx1REFBdUQ7UUFDcEUsU0FBUyxFQUFFLENBQUMsc0RBQXNELENBQUM7S0FDcEUsQ0FBQztxQ0FJMkIsdUJBQWM7UUFDYixlQUFNO1FBQ0EsdUJBQVk7R0FKbkMsb0JBQW9CLENBbUJoQztBQW5CWSxvREFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9ICAgICAgZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSHR0cCB9ICAgICAgICAgICAgICAgICAgIGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgUm91dGVyIH0gICAgICAgICAgICAgICAgIGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSAgICAgICAgICAgICBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5cclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL3N3aXRjaE1hcFwiO1xyXG5cclxuaW1wb3J0IHsgTW92aWUgfSAgICAgICAgICBmcm9tIFwiLi4vLi4vbW9kZWxzXCI7XHJcbmltcG9ydCB7IE1vdmllUmVzcG9uc2UgfSAgZnJvbSBcIi4uLy4uL21vZGVsc1wiO1xyXG5pbXBvcnQgeyBNb3ZpZVNlcnZpY2UgfSAgIGZyb20gXCIuLi8uLi9zZXJ2aWNlc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwibW92aWUtZGV0YWlsXCIsXHJcbiAgdGVtcGxhdGVVcmw6IFwiLi9jb21wb25lbnRzL21vdmllLWRldGFpbC9tb3ZpZS1kZXRhaWwuY29tcG9uZW50Lmh0bWxcIixcclxuICBzdHlsZVVybHM6IFtcIi4vY29tcG9uZW50cy9tb3ZpZS1kZXRhaWwvbW92aWUtZGV0YWlsLmNvbXBvbmVudC5jc3NcIl1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBNb3ZpZURldGFpbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBtb3ZpZVNlcnZpY2U6IE1vdmllU2VydmljZSkge1xyXG4gIH1cclxuICBcclxuICBtb3ZpZURldGFpbCA9IG5ldyBNb3ZpZSgpO1xyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIFxyXG4gICAgdGhpcy5yb3V0ZS5wYXJhbXNcclxuICAgICAgLnN3aXRjaE1hcCgocGFyYW1zOiBQYXJhbXMpID0+IHRoaXMubW92aWVTZXJ2aWNlLmdldE1vdmllKCtwYXJhbXNbJ2lkJ10pIClcclxuICAgICAgLnN1YnNjcmliZShtb3ZpZSA9PiB0aGlzLm1vdmllRGV0YWlsID0gbW92aWUpO1xyXG4gIH1cclxuXHJcbiAgYmFja1RvTGlzdCgpe1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvaG9tZSddKTtcclxuICB9XHJcbn1cclxuIl19