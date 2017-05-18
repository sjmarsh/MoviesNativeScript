"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var movie_response_1 = require("./movie-response");
var CurrentSearch = (function () {
    function CurrentSearch() {
        this.searchTerm = '';
        this.movieResponse = new movie_response_1.MovieResponse();
        this.currentPage = 1;
        this.lastSkipSize = 0;
        this.lastTakeSize = 0;
        this.allCategories = new Array();
        this.selectedCategories = new Array();
        this.selectedMovieId = -1;
        this.lastScrollPosition = 0;
        this.isLoading = false;
    }
    return CurrentSearch;
}());
exports.CurrentSearch = CurrentSearch;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VycmVudC1zZWFyY2guanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjdXJyZW50LXNlYXJjaC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG1EQUFpRDtBQUVqRDtJQWVFO1FBRUUsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLDhCQUFhLEVBQUUsQ0FBQztRQUN6QyxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztRQUNyQixJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksS0FBSyxFQUFVLENBQUM7UUFDekMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksS0FBSyxFQUFVLENBQUM7UUFDOUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsa0JBQWtCLEdBQUcsQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO0lBQ3pCLENBQUM7SUFDSCxvQkFBQztBQUFELENBQUMsQUE1QkQsSUE0QkM7QUE1Qlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb3ZpZVJlc3BvbnNlIH0gZnJvbSAnLi9tb3ZpZS1yZXNwb25zZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgQ3VycmVudFNlYXJjaCB7XHJcbiAgXHJcbiAgcHVibGljIHNlYXJjaFRlcm0gOiBzdHJpbmc7XHJcbiAgcHVibGljIG1vdmllUmVzcG9uc2U6IE1vdmllUmVzcG9uc2U7XHJcbiAgcHVibGljIGN1cnJlbnRQYWdlOiBudW1iZXI7XHJcbiAgcHVibGljIGxhc3RTa2lwU2l6ZTogbnVtYmVyO1xyXG4gIHB1YmxpYyBsYXN0VGFrZVNpemU6IG51bWJlcjtcclxuICBwdWJsaWMgYWxsQ2F0ZWdvcmllczogQXJyYXk8c3RyaW5nPjtcclxuICBwdWJsaWMgc2VsZWN0ZWRDYXRlZ29yaWVzOiBBcnJheTxzdHJpbmc+O1xyXG4gIHB1YmxpYyBzZWxlY3RlZE1vdmllSWQ6IG51bWJlcjtcclxuICBwdWJsaWMgbGFzdFNjcm9sbFBvc2l0aW9uOiBudW1iZXI7XHJcbiAgcHVibGljIGVycm9yOiBhbnk7XHJcbiAgcHVibGljIGVycm9yTWVzc2FnZTogc3RyaW5nO1xyXG4gIHB1YmxpYyBpc0xvYWRpbmc6IGJvb2xlYW47XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihcclxuICApe1xyXG4gICAgdGhpcy5zZWFyY2hUZXJtID0gJyc7XHJcbiAgICB0aGlzLm1vdmllUmVzcG9uc2UgPSBuZXcgTW92aWVSZXNwb25zZSgpO1xyXG4gICAgdGhpcy5jdXJyZW50UGFnZSA9IDE7XHJcbiAgICB0aGlzLmxhc3RTa2lwU2l6ZSA9IDA7XHJcbiAgICB0aGlzLmxhc3RUYWtlU2l6ZSA9IDA7XHJcbiAgICB0aGlzLmFsbENhdGVnb3JpZXMgPSBuZXcgQXJyYXk8c3RyaW5nPigpO1xyXG4gICAgdGhpcy5zZWxlY3RlZENhdGVnb3JpZXMgPSBuZXcgQXJyYXk8c3RyaW5nPigpO1xyXG4gICAgdGhpcy5zZWxlY3RlZE1vdmllSWQgPSAtMTtcclxuICAgIHRoaXMubGFzdFNjcm9sbFBvc2l0aW9uID0gMDtcclxuICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgfVxyXG59Il19