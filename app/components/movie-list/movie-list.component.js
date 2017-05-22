"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var observable_array_1 = require("data/observable-array");
var angular_1 = require("nativescript-telerik-ui/sidedrawer/angular");
require("rxjs/add/operator/map");
require("rxjs/add/operator/debounceTime");
require("rxjs/add/operator/distinctUntilChanged");
var models_1 = require("../../models");
var services_1 = require("../../services");
var MovieListComponent = (function () {
    function MovieListComponent(http, router, movieService, referenceDataService, _changeDetectionRef) {
        this.http = http;
        this.router = router;
        this.movieService = movieService;
        this.referenceDataService = referenceDataService;
        this._changeDetectionRef = _changeDetectionRef;
        this.PAGE_SIZE = 10;
        this.currentPage = 1;
        this.filterIcon = String.fromCharCode(parseInt('ea5b', 16));
    }
    MovieListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.movies = new observable_array_1.ObservableArray();
        this.categories = new observable_array_1.ObservableArray();
        this.searchTerm = new forms_1.FormControl();
        this.selectedCategories = new Array();
        this.getCategories();
        this.searchTerm.valueChanges
            .debounceTime(500)
            .subscribe(function (term) { return _this.search(); });
        this.searchTerm.setValue("");
    };
    MovieListComponent.prototype.ngAfterViewInit = function () {
        this.drawer = this.drawerComponent.sideDrawer;
        this._changeDetectionRef.detectChanges();
    };
    MovieListComponent.prototype.search = function () {
        this.currentPage = 1;
        this.movies.splice(0);
        this.getMovies(this.searchTerm.value, 0, this.PAGE_SIZE);
    };
    MovieListComponent.prototype.getMovies = function (searchTerm, skip, take) {
        var _this = this;
        this.movieService.searchForMovies(searchTerm, this.selectedCategories, skip, take)
            .subscribe(function (r) { return r.movies.forEach(function (movie) { return _this.movies.push(movie); }); });
    };
    MovieListComponent.prototype.getCategories = function () {
        var _this = this;
        this.categories.splice(0);
        this.referenceDataService.getCategories().then(function (c) { return c.forEach(function (cat) { return _this.categories.push(new models_1.CategorySelection(cat, false)); }); });
    };
    MovieListComponent.prototype.goToDetail = function (movieId) {
        var link = ['/detail', movieId];
        this.router.navigate(link);
    };
    MovieListComponent.prototype.listViewLoadMoreItems = function () {
        var skip = this.currentPage * this.PAGE_SIZE;
        var take = this.currentPage * this.PAGE_SIZE + this.PAGE_SIZE;
        this.currentPage = this.currentPage + 1;
        this.getMovies(this.searchTerm.value, skip, take);
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
    MovieListComponent.prototype.openDrawer = function () {
        this.drawer.showDrawer();
    };
    MovieListComponent.prototype.onCloseDrawerTap = function () {
        this.drawer.closeDrawer();
        var newCategories = this.categories.filter(function (cat) { return cat.isSelected === true; }).map(function (cat) { return cat.category; });
        if (!this.areSame(newCategories, this.selectedCategories)) {
            this.selectedCategories = newCategories;
            this.search();
        }
        this.hasCategoriesSelected = this.selectedCategories.length > 0;
    };
    MovieListComponent.prototype.areSame = function (array1, array2) {
        return (array1.length == array2.length)
            && array1.every(function (element, index) {
                return element === array2[index];
            });
    };
    ;
    MovieListComponent.prototype.toggleCategorySelection = function (selection) {
        if (selection.isSelected) {
            selection.isSelected = false;
        }
        else {
            selection.isSelected = true;
        }
    };
    MovieListComponent.prototype.clearCategorySelections = function () {
        this.categories.forEach(function (c) { return c.isSelected = false; });
        // force refresh...
        var firstCategory = this.categories.getItem(0);
        this.categories.setItem(0, firstCategory);
    };
    return MovieListComponent;
}());
__decorate([
    core_1.ViewChild(angular_1.RadSideDrawerComponent),
    __metadata("design:type", angular_1.RadSideDrawerComponent)
], MovieListComponent.prototype, "drawerComponent", void 0);
MovieListComponent = __decorate([
    core_1.Component({
        selector: "movie-list",
        templateUrl: "./components/movie-list/movie-list.component.html",
        styleUrls: ["./components/movie-list/movie-list.component.css"]
    }),
    __metadata("design:paramtypes", [http_1.Http,
        router_1.Router,
        services_1.MovieService,
        services_1.ReferenceDataService,
        core_1.ChangeDetectorRef])
], MovieListComponent);
exports.MovieListComponent = MovieListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW92aWUtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtb3ZpZS1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFpRztBQUNqRyx3Q0FBb0Q7QUFDcEQsc0NBQW1EO0FBQ25ELDBDQUFxRDtBQUVyRCwwREFBMkQ7QUFFM0Qsc0VBQW9HO0FBR3BHLGlDQUErQjtBQUMvQiwwQ0FBd0M7QUFDeEMsa0RBQWdEO0FBRWhELHVDQUVrRDtBQUVsRCwyQ0FDd0Q7QUFReEQsSUFBYSxrQkFBa0I7SUFZN0IsNEJBQW9CLElBQVUsRUFDVixNQUFjLEVBQ2QsWUFBMkIsRUFDM0Isb0JBQTBDLEVBQzFDLG1CQUFzQztRQUp0QyxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQ1YsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGlCQUFZLEdBQVosWUFBWSxDQUFlO1FBQzNCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFDMUMsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFtQjtRQVZsRCxjQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ2YsZ0JBQVcsR0FBRyxDQUFDLENBQUM7UUFFakIsZUFBVSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBUTlELENBQUM7SUFLRCxxQ0FBUSxHQUFSO1FBQUEsaUJBYUM7UUFaQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksa0NBQWUsRUFBUyxDQUFDO1FBQzNDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxrQ0FBZSxFQUFxQixDQUFDO1FBQzNELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxtQkFBVyxFQUFFLENBQUM7UUFDcEMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksS0FBSyxFQUFVLENBQUM7UUFFOUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBRXJCLElBQUksQ0FBQyxVQUFVLENB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O1lBQ25DLENBQUMsQ0FBQyxDQUFDO0lBQ2IsQ0FBQztJQUFBLENBQUM7SUFFSyxvREFBdUIsR0FBOUIsVUFBK0IsU0FBNEI7UUFDekQsRUFBRSxDQUFBLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFBLENBQUM7WUFDdkIsU0FBUyxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDL0IsQ0FBQztRQUNELElBQUksQ0FBQSxDQUFDO1lBQ0gsU0FBUyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDOUIsQ0FBQztJQUNILENBQUM7SUFFTSxvREFBdUIsR0FBOUI7UUFDRSxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxVQUFVLEdBQUcsS0FBSyxFQUFwQixDQUFvQixDQUFDLENBQUM7UUFFbkQsbUJBQW1CO1FBQ25CLElBQUksYUFBYSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxhQUFhLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBQ0gseUJBQUM7QUFBRCxDQUFDLEFBM0hELElBMkhDO0FBeEdvQztJQUFsQyxnQkFBUyxDQUFDLGdDQUFzQixDQUFDOzhCQUF5QixnQ0FBc0I7MkRBQUM7QUFuQnZFLGtCQUFrQjtJQU45QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFlBQVk7UUFDdEIsV0FBVyxFQUFFLG1EQUFtRDtRQUNoRSxTQUFTLEVBQUUsQ0FBQyxrREFBa0QsQ0FBQztLQUNoRSxDQUFDO3FDQWMwQixXQUFJO1FBQ0YsZUFBTTtRQUNDLHVCQUFZO1FBQ0wsK0JBQW9CO1FBQ3JCLHdCQUFpQjtHQWhCL0Msa0JBQWtCLENBMkg5QjtBQTNIWSxnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBBZnRlclZpZXdJbml0LCBDaGFuZ2VEZXRlY3RvclJlZiAgfSAgZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRm9ybUNvbnRyb2wgfSAgICAgICAgZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IEh0dHAgfSAgICAgICAgICAgICAgIGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSAgICAgICAgICAgICBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gICAgICAgICBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlQXJyYXkgfSAgICBmcm9tIFwiZGF0YS9vYnNlcnZhYmxlLWFycmF5XCI7XHJcblxyXG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyQ29tcG9uZW50LCBTaWRlRHJhd2VyVHlwZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdGVsZXJpay11aS9zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcclxuaW1wb3J0IHsgUmFkU2lkZURyYXdlciB9ICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tICduYXRpdmVzY3JpcHQtdGVsZXJpay11aS9zaWRlZHJhd2VyJztcclxuXHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2RlYm91bmNlVGltZSc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZGlzdGluY3RVbnRpbENoYW5nZWQnO1xyXG5cclxuaW1wb3J0IHsgTW92aWUsICAgICAgICAgICBcclxuICAgICAgICAgTW92aWVSZXNwb25zZSxcclxuICAgICAgICAgQ2F0ZWdvcnlTZWxlY3Rpb24gfSAgZnJvbSBcIi4uLy4uL21vZGVsc1wiO1xyXG5cclxuaW1wb3J0IHsgTW92aWVTZXJ2aWNlLFxyXG4gICAgICAgICBSZWZlcmVuY2VEYXRhU2VydmljZSB9ICAgZnJvbSAnLi4vLi4vc2VydmljZXMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwibW92aWUtbGlzdFwiLFxyXG4gIHRlbXBsYXRlVXJsOiBcIi4vY29tcG9uZW50cy9tb3ZpZS1saXN0L21vdmllLWxpc3QuY29tcG9uZW50Lmh0bWxcIixcclxuICBzdHlsZVVybHM6IFtcIi4vY29tcG9uZW50cy9tb3ZpZS1saXN0L21vdmllLWxpc3QuY29tcG9uZW50LmNzc1wiXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIE1vdmllTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgXHJcbiAgcHJpdmF0ZSBtb3ZpZXM6IE9ic2VydmFibGVBcnJheTxNb3ZpZT47XHJcbiAgcHJpdmF0ZSBjYXRlZ29yaWVzOiBPYnNlcnZhYmxlQXJyYXk8Q2F0ZWdvcnlTZWxlY3Rpb24+O1xyXG4gIHByaXZhdGUgc2VhcmNoVGVybTogRm9ybUNvbnRyb2w7XHJcbiAgcHJpdmF0ZSBzZWxlY3RlZENhdGVnb3JpZXM6IEFycmF5PHN0cmluZz47XHJcbiAgcHJpdmF0ZSBQQUdFX1NJWkUgPSAxMDtcclxuICBwcml2YXRlIGN1cnJlbnRQYWdlID0gMTtcclxuXHJcbiAgcHVibGljIGZpbHRlckljb24gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHBhcnNlSW50KCdlYTViJywgMTYpKTtcclxuICBwdWJsaWMgaGFzQ2F0ZWdvcmllc1NlbGVjdGVkOiBib29sZWFuO1xyXG4gIFxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCwgXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBtb3ZpZVNlcnZpY2UgOiBNb3ZpZVNlcnZpY2UsIFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgcmVmZXJlbmNlRGF0YVNlcnZpY2U6IFJlZmVyZW5jZURhdGFTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgX2NoYW5nZURldGVjdGlvblJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpe1xyXG4gIH1cclxuXHJcbiAgQFZpZXdDaGlsZChSYWRTaWRlRHJhd2VyQ29tcG9uZW50KSBwdWJsaWMgZHJhd2VyQ29tcG9uZW50OiBSYWRTaWRlRHJhd2VyQ29tcG9uZW50O1xyXG4gIHByaXZhdGUgZHJhd2VyOiBSYWRTaWRlRHJhd2VyO1xyXG5cclxuICBuZ09uSW5pdCgpe1xyXG4gICAgdGhpcy5tb3ZpZXMgPSBuZXcgT2JzZXJ2YWJsZUFycmF5PE1vdmllPigpO1xyXG4gICAgdGhpcy5jYXRlZ29yaWVzID0gbmV3IE9ic2VydmFibGVBcnJheTxDYXRlZ29yeVNlbGVjdGlvbj4oKTtcclxuICAgIHRoaXMuc2VhcmNoVGVybSA9IG5ldyBGb3JtQ29udHJvbCgpO1xyXG4gICAgdGhpcy5zZWxlY3RlZENhdGVnb3JpZXMgPSBuZXcgQXJyYXk8c3RyaW5nPigpO1xyXG5cclxuICAgIHRoaXMuZ2V0Q2F0ZWdvcmllcygpO1xyXG5cclxuICAgIHRoaXMuc2VhcmNoVGVybS52YWx1ZUNoYW5nZXNcclxuICAgICAgICAgICAgICAgICAgLmRlYm91bmNlVGltZSg1MDApXHJcbiAgICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUodGVybSA9PiB0aGlzLnNlYXJjaCgpKTsgICAgICAgICAgICBcclxuICAgIFxyXG4gICAgdGhpcy5zZWFyY2hUZXJtLnNldFZhbHVlKFwiXCIpO1xyXG4gIH1cclxuICBcclxuICAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgIHRoaXMuZHJhd2VyID0gdGhpcy5kcmF3ZXJDb21wb25lbnQuc2lkZURyYXdlcjtcclxuICAgICB0aGlzLl9jaGFuZ2VEZXRlY3Rpb25SZWYuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICB9XHJcbiAgIFxyXG4gIHByaXZhdGUgc2VhcmNoKCk6IHZvaWQge1xyXG4gICAgdGhpcy5jdXJyZW50UGFnZSA9IDE7XHJcbiAgICB0aGlzLm1vdmllcy5zcGxpY2UoMCk7XHJcbiAgICB0aGlzLmdldE1vdmllcyh0aGlzLnNlYXJjaFRlcm0udmFsdWUsIDAsIHRoaXMuUEFHRV9TSVpFKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0TW92aWVzKHNlYXJjaFRlcm06IHN0cmluZywgc2tpcDogbnVtYmVyLCB0YWtlOiBudW1iZXIpIDogdm9pZHtcclxuICAgIHRoaXMubW92aWVTZXJ2aWNlLnNlYXJjaEZvck1vdmllcyhzZWFyY2hUZXJtLCB0aGlzLnNlbGVjdGVkQ2F0ZWdvcmllcywgc2tpcCwgdGFrZSlcclxuICAgICAgICAuc3Vic2NyaWJlKHIgPT4gci5tb3ZpZXMuZm9yRWFjaCgobW92aWUpID0+IHRoaXMubW92aWVzLnB1c2gobW92aWUpKSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldENhdGVnb3JpZXMoKSA6IHZvaWQge1xyXG4gICAgdGhpcy5jYXRlZ29yaWVzLnNwbGljZSgwKTtcclxuICAgIHRoaXMucmVmZXJlbmNlRGF0YVNlcnZpY2UuZ2V0Q2F0ZWdvcmllcygpLnRoZW4oYyA9PiBjLmZvckVhY2goKGNhdCkgPT4gdGhpcy5jYXRlZ29yaWVzLnB1c2gobmV3IENhdGVnb3J5U2VsZWN0aW9uKGNhdCwgZmFsc2UpKSkpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdvVG9EZXRhaWwobW92aWVJZDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBsZXQgbGluayA9IFsnL2RldGFpbCcsIG1vdmllSWRdO1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUobGluayk7ICAgXHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbGlzdFZpZXdMb2FkTW9yZUl0ZW1zKCl7XHJcbiAgICBsZXQgc2tpcCA9IHRoaXMuY3VycmVudFBhZ2UgKiB0aGlzLlBBR0VfU0laRTtcclxuICAgIGxldCB0YWtlID0gdGhpcy5jdXJyZW50UGFnZSAqIHRoaXMuUEFHRV9TSVpFICsgdGhpcy5QQUdFX1NJWkU7XHJcbiAgICB0aGlzLmN1cnJlbnRQYWdlID0gdGhpcy5jdXJyZW50UGFnZSArIDE7XHJcbiAgICBcclxuICAgIHRoaXMuZ2V0TW92aWVzKHRoaXMuc2VhcmNoVGVybS52YWx1ZSwgc2tpcCwgdGFrZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2VhcmNoQmFyTG9hZGVkKGV2ZW50KTogdm9pZHtcclxuICAgIGlmKGV2ZW50Lm9iamVjdC5hbmRyb2lkKXtcclxuICAgICAgZXZlbnQub2JqZWN0LmRpc21pc3NTb2Z0SW5wdXQoKTtcclxuICAgICAgZXZlbnQub2JqZWN0LmFuZHJvaWQuY2xlYXJGb2N1cygpO1xyXG4gICAgICBldmVudC5vYmplY3QuYW5kcm9pZC5zZXRGb2N1c2FibGUoZmFsc2UpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHNlYXJjaEJhckNoYW5nZWQodGVybTogU3RyaW5nKTogdm9pZCB7XHJcbiAgICB0aGlzLnNlYXJjaFRlcm0uc2V0VmFsdWUodGVybSk7XHJcbiAgfSAgXHJcblxyXG4gIHB1YmxpYyBvcGVuRHJhd2VyKCkge1xyXG4gICAgdGhpcy5kcmF3ZXIuc2hvd0RyYXdlcigpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG9uQ2xvc2VEcmF3ZXJUYXAoKSB7XHJcbiAgICB0aGlzLmRyYXdlci5jbG9zZURyYXdlcigpO1xyXG4gICAgXHJcbiAgICBsZXQgbmV3Q2F0ZWdvcmllcyA9IHRoaXMuY2F0ZWdvcmllcy5maWx0ZXIoY2F0ID0+IGNhdC5pc1NlbGVjdGVkID09PSB0cnVlKS5tYXAoY2F0ID0+IGNhdC5jYXRlZ29yeSk7XHJcbiAgICBcclxuICAgIGlmKCF0aGlzLmFyZVNhbWUobmV3Q2F0ZWdvcmllcywgdGhpcy5zZWxlY3RlZENhdGVnb3JpZXMpKXtcclxuICAgICAgdGhpcy5zZWxlY3RlZENhdGVnb3JpZXMgPSBuZXdDYXRlZ29yaWVzO1xyXG4gICAgICB0aGlzLnNlYXJjaCgpO1xyXG4gICAgfSBcclxuXHJcbiAgICB0aGlzLmhhc0NhdGVnb3JpZXNTZWxlY3RlZCA9IHRoaXMuc2VsZWN0ZWRDYXRlZ29yaWVzLmxlbmd0aCA+IDA7ICBcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYXJlU2FtZShhcnJheTE6IEFycmF5PHN0cmluZz4sIGFycmF5MjogQXJyYXk8c3RyaW5nPikgOiBib29sZWFuIHtcclxuICAgIHJldHVybiAoYXJyYXkxLmxlbmd0aCA9PSBhcnJheTIubGVuZ3RoKSBcclxuICAgICAgICAgICAgJiYgYXJyYXkxLmV2ZXJ5KGZ1bmN0aW9uKGVsZW1lbnQsIGluZGV4KSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQgPT09IGFycmF5MltpbmRleF07IFxyXG4gICAgICAgICAgICB9KTtcclxuICB9O1xyXG4gIFxyXG4gIHB1YmxpYyB0b2dnbGVDYXRlZ29yeVNlbGVjdGlvbihzZWxlY3Rpb246IENhdGVnb3J5U2VsZWN0aW9uKTogdm9pZCB7XHJcbiAgICBpZihzZWxlY3Rpb24uaXNTZWxlY3RlZCl7XHJcbiAgICAgIHNlbGVjdGlvbi5pc1NlbGVjdGVkID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICBzZWxlY3Rpb24uaXNTZWxlY3RlZCA9IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY2xlYXJDYXRlZ29yeVNlbGVjdGlvbnMoKTogdm9pZCB7XHJcbiAgICB0aGlzLmNhdGVnb3JpZXMuZm9yRWFjaChjID0+IGMuaXNTZWxlY3RlZCA9IGZhbHNlKTsgICAgXHJcbiAgICBcclxuICAgIC8vIGZvcmNlIHJlZnJlc2guLi5cclxuICAgIGxldCBmaXJzdENhdGVnb3J5ID0gdGhpcy5jYXRlZ29yaWVzLmdldEl0ZW0oMCk7XHJcbiAgICB0aGlzLmNhdGVnb3JpZXMuc2V0SXRlbSgwLCBmaXJzdENhdGVnb3J5KTtcclxuICB9XHJcbn1cclxuXHJcbiJdfQ==