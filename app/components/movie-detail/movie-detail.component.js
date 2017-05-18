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
        template: "   \n    <GridLayout columns=\"*, *\" rows=\"*, *, *, *, *, *, *, *\" margin=\"5, 5, 5, 5\">\n        <Label text=\"Title\" row=\"0\" col=\"0\" ></Label>\n        <Label text=\"{{movieDetail.title}}\" row=\"0\" col=\"1\"></Label>\n        <Label text=\"Release Year\" row=\"1\" col=\"0\"></Label>\n        <Label text=\"{{movieDetail.releaseYear}}\" row=\"1\" col=\"1\"></Label>\n        <Label text=\"Category\" row=\"2\" col=\"0\"></Label>\n        <Label text=\"{{movieDetail.category}}\" row=\"2\" col=\"1\"></Label>\n        <Label text=\"Classification\" row=\"3\" col=\"0\"></Label>\n        <Label text=\"{{movieDetail.classification}}\" row=\"3\" col=\"1\"></Label>\n        <Label text=\"Format\" row=\"4\" col=\"0\"></Label>\n        <Label text=\"{{movieDetail.format}}\" row=\"4\" col=\"1\"></Label>\n        <Label text=\"Running Time\" row=\"5\" col=\"0\"></Label>\n        <Label text=\"{{movieDetail.runningTime}}\" row=\"5\" col=\"1\"></Label>\n        <Label text=\"TV Recording\" row=\"6\" col=\"0\"></Label>\n        <Label text=\"{{movieDetail.tvRecording}}\" row=\"6\" col=\"1\"></Label>\n        <Label text=\"Date Added\" row=\"7\" col=\"0\"></Label>\n        <Label text=\"{{movieDetail.dateAdded}}\" row=\"7\" col=\"1\"></Label>\n    </GridLayout>\n  "
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_2.Router,
        services_1.MovieService])
], MovieDetailComponent);
exports.MovieDetailComponent = MovieDetailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW92aWUtZGV0YWlsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1vdmllLWRldGFpbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBdUQ7QUFFdkQsMENBQXlEO0FBQ3pELDBDQUF5RDtBQUd6RCxpQ0FBK0I7QUFDL0IsdUNBQXFDO0FBRXJDLHVDQUE4QztBQUU5QywyQ0FBZ0Q7QUEwQmhELElBQWEsb0JBQW9CO0lBRS9CLDhCQUFvQixLQUFxQixFQUNyQixNQUFjLEVBQ2QsWUFBMEI7UUFGMUIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBSTlDLGdCQUFXLEdBQUcsSUFBSSxjQUFLLEVBQUUsQ0FBQztJQUgxQixDQUFDO0lBS0QsdUNBQVEsR0FBUjtRQUFBLGlCQUtDO1FBSEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNO2FBQ2QsU0FBUyxDQUFDLFVBQUMsTUFBYyxJQUFLLE9BQUEsS0FBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBekMsQ0FBeUMsQ0FBRTthQUN6RSxTQUFTLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssRUFBeEIsQ0FBd0IsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFRCx5Q0FBVSxHQUFWO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFSCwyQkFBQztBQUFELENBQUMsQUFyQkQsSUFxQkM7QUFyQlksb0JBQW9CO0lBeEJoQyxnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGNBQWM7UUFDeEIsUUFBUSxFQUFFLGd3Q0FtQlQ7S0FDRixDQUFDO3FDQUkyQix1QkFBYztRQUNiLGVBQU07UUFDQSx1QkFBWTtHQUpuQyxvQkFBb0IsQ0FxQmhDO0FBckJZLG9EQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gICAgICBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBIdHRwIH0gICAgICAgICAgICAgICAgICAgZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSAgICAgICAgICAgICAgICAgZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9ICAgICAgICAgICAgIGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcblxyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3Ivc3dpdGNoTWFwXCI7XHJcblxyXG5pbXBvcnQgeyBNb3ZpZSB9ICAgICAgICAgIGZyb20gXCIuLi8uLi9tb2RlbHNcIjtcclxuaW1wb3J0IHsgTW92aWVSZXNwb25zZSB9ICBmcm9tIFwiLi4vLi4vbW9kZWxzXCI7XHJcbmltcG9ydCB7IE1vdmllU2VydmljZSB9ICAgZnJvbSBcIi4uLy4uL3NlcnZpY2VzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJtb3ZpZS1kZXRhaWxcIixcclxuICB0ZW1wbGF0ZTogYCAgIFxyXG4gICAgPEdyaWRMYXlvdXQgY29sdW1ucz1cIiosICpcIiByb3dzPVwiKiwgKiwgKiwgKiwgKiwgKiwgKiwgKlwiIG1hcmdpbj1cIjUsIDUsIDUsIDVcIj5cclxuICAgICAgICA8TGFiZWwgdGV4dD1cIlRpdGxlXCIgcm93PVwiMFwiIGNvbD1cIjBcIiA+PC9MYWJlbD5cclxuICAgICAgICA8TGFiZWwgdGV4dD1cInt7bW92aWVEZXRhaWwudGl0bGV9fVwiIHJvdz1cIjBcIiBjb2w9XCIxXCI+PC9MYWJlbD5cclxuICAgICAgICA8TGFiZWwgdGV4dD1cIlJlbGVhc2UgWWVhclwiIHJvdz1cIjFcIiBjb2w9XCIwXCI+PC9MYWJlbD5cclxuICAgICAgICA8TGFiZWwgdGV4dD1cInt7bW92aWVEZXRhaWwucmVsZWFzZVllYXJ9fVwiIHJvdz1cIjFcIiBjb2w9XCIxXCI+PC9MYWJlbD5cclxuICAgICAgICA8TGFiZWwgdGV4dD1cIkNhdGVnb3J5XCIgcm93PVwiMlwiIGNvbD1cIjBcIj48L0xhYmVsPlxyXG4gICAgICAgIDxMYWJlbCB0ZXh0PVwie3ttb3ZpZURldGFpbC5jYXRlZ29yeX19XCIgcm93PVwiMlwiIGNvbD1cIjFcIj48L0xhYmVsPlxyXG4gICAgICAgIDxMYWJlbCB0ZXh0PVwiQ2xhc3NpZmljYXRpb25cIiByb3c9XCIzXCIgY29sPVwiMFwiPjwvTGFiZWw+XHJcbiAgICAgICAgPExhYmVsIHRleHQ9XCJ7e21vdmllRGV0YWlsLmNsYXNzaWZpY2F0aW9ufX1cIiByb3c9XCIzXCIgY29sPVwiMVwiPjwvTGFiZWw+XHJcbiAgICAgICAgPExhYmVsIHRleHQ9XCJGb3JtYXRcIiByb3c9XCI0XCIgY29sPVwiMFwiPjwvTGFiZWw+XHJcbiAgICAgICAgPExhYmVsIHRleHQ9XCJ7e21vdmllRGV0YWlsLmZvcm1hdH19XCIgcm93PVwiNFwiIGNvbD1cIjFcIj48L0xhYmVsPlxyXG4gICAgICAgIDxMYWJlbCB0ZXh0PVwiUnVubmluZyBUaW1lXCIgcm93PVwiNVwiIGNvbD1cIjBcIj48L0xhYmVsPlxyXG4gICAgICAgIDxMYWJlbCB0ZXh0PVwie3ttb3ZpZURldGFpbC5ydW5uaW5nVGltZX19XCIgcm93PVwiNVwiIGNvbD1cIjFcIj48L0xhYmVsPlxyXG4gICAgICAgIDxMYWJlbCB0ZXh0PVwiVFYgUmVjb3JkaW5nXCIgcm93PVwiNlwiIGNvbD1cIjBcIj48L0xhYmVsPlxyXG4gICAgICAgIDxMYWJlbCB0ZXh0PVwie3ttb3ZpZURldGFpbC50dlJlY29yZGluZ319XCIgcm93PVwiNlwiIGNvbD1cIjFcIj48L0xhYmVsPlxyXG4gICAgICAgIDxMYWJlbCB0ZXh0PVwiRGF0ZSBBZGRlZFwiIHJvdz1cIjdcIiBjb2w9XCIwXCI+PC9MYWJlbD5cclxuICAgICAgICA8TGFiZWwgdGV4dD1cInt7bW92aWVEZXRhaWwuZGF0ZUFkZGVkfX1cIiByb3c9XCI3XCIgY29sPVwiMVwiPjwvTGFiZWw+XHJcbiAgICA8L0dyaWRMYXlvdXQ+XHJcbiAgYFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIE1vdmllRGV0YWlsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBcclxuICAgICAgICAgICAgICBwcml2YXRlIG1vdmllU2VydmljZTogTW92aWVTZXJ2aWNlKSB7XHJcbiAgfVxyXG5cclxuICBcclxuICBtb3ZpZURldGFpbCA9IG5ldyBNb3ZpZSgpO1xyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIFxyXG4gICAgdGhpcy5yb3V0ZS5wYXJhbXNcclxuICAgICAgLnN3aXRjaE1hcCgocGFyYW1zOiBQYXJhbXMpID0+IHRoaXMubW92aWVTZXJ2aWNlLmdldE1vdmllKCtwYXJhbXNbJ2lkJ10pIClcclxuICAgICAgLnN1YnNjcmliZShtb3ZpZSA9PiB0aGlzLm1vdmllRGV0YWlsID0gbW92aWUpO1xyXG4gIH1cclxuXHJcbiAgYmFja1RvTGlzdCgpe1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvaG9tZSddKTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==