"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
require("rxjs/add/operator/toPromise");
var environment_config_1 = require("./environment-config");
var MovieService = (function () {
    function MovieService(http, config) {
        this.http = http;
        this.config = config;
        this.baseUrl = '';
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.baseUrl = config.movieApiUrl() + '/api/movies';
    }
    MovieService.prototype.searchForMoviesWithCriteria = function (criteria) {
        return this.searchForMovies(criteria.searchTerm, criteria.selectedCategories, criteria.currentSkipSize, criteria.currentTakeSize);
    };
    MovieService.prototype.searchForMovies = function (term, categories, skip, take) {
        var categoryList = '';
        if (categories && categories.length > 0) {
            for (var _i = 0, categories_1 = categories; _i < categories_1.length; _i++) {
                var category = categories_1[_i];
                categoryList += '&categories=' + category;
            }
        }
        term = term.replace(' ', '%20');
        return this.http.get(this.baseUrl + "?searchFilter=" + term + categoryList + "&skip=" + skip + "&take=" + take)
            .map(function (response) { return response.json(); });
        //.catch(this.handleError);
    };
    MovieService.prototype.getMovie = function (movieId) {
        var url = this.baseUrl + "/" + movieId;
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    MovieService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // todo: log
        return Promise.reject(error.message || error);
    };
    return MovieService;
}());
MovieService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, environment_config_1.EnvironmentConfig])
], MovieService);
exports.MovieService = MovieService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW92aWUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1vdmllLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBK0M7QUFDL0Msc0NBQStDO0FBRy9DLGlDQUErQjtBQUMvQix1Q0FBcUM7QUFPckMsMkRBQTBEO0FBRzFELElBQWEsWUFBWTtJQUt2QixzQkFBb0IsSUFBVSxFQUFVLE1BQXlCO1FBQTdDLFNBQUksR0FBSixJQUFJLENBQU07UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFtQjtRQUh6RCxZQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2IsWUFBTyxHQUFHLElBQUksY0FBTyxDQUFDLEVBQUMsY0FBYyxFQUFFLGtCQUFrQixFQUFDLENBQUMsQ0FBQztRQUdsRSxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxXQUFXLEVBQUUsR0FBRyxhQUFhLENBQUM7SUFDdEQsQ0FBQztJQUVELGtEQUEyQixHQUEzQixVQUE0QixRQUF3QjtRQUNsRCxNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLFFBQVEsQ0FBQyxrQkFBa0IsRUFBRSxRQUFRLENBQUMsZUFBZSxFQUFFLFFBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUNwSSxDQUFDO0lBRUQsc0NBQWUsR0FBZixVQUFnQixJQUFZLEVBQUUsVUFBeUIsRUFBRSxJQUFZLEVBQUUsSUFBWTtRQUNqRixJQUFJLFlBQVksR0FBRyxFQUFFLENBQUM7UUFDdEIsRUFBRSxDQUFBLENBQUMsVUFBVSxJQUFJLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQ3ZDLENBQUM7WUFDQyxHQUFHLENBQUEsQ0FBaUIsVUFBVSxFQUFWLHlCQUFVLEVBQVYsd0JBQVUsRUFBVixJQUFVO2dCQUExQixJQUFJLFFBQVEsbUJBQUE7Z0JBQ2QsWUFBWSxJQUFJLGNBQWMsR0FBRSxRQUFRLENBQUM7YUFDMUM7UUFDSCxDQUFDO1FBRUQsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRWhDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBSSxJQUFJLENBQUMsT0FBTyxzQkFBaUIsSUFBSSxHQUFHLFlBQVksY0FBUyxJQUFJLGNBQVMsSUFBTSxDQUFDO2FBQ3BGLEdBQUcsQ0FBQyxVQUFDLFFBQVEsSUFBSyxPQUFBLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBZixDQUFlLENBQUMsQ0FBQztRQUNwQywyQkFBMkI7SUFDN0MsQ0FBQztJQUVELCtCQUFRLEdBQVIsVUFBUyxPQUFlO1FBQ3RCLElBQUksR0FBRyxHQUFNLElBQUksQ0FBQyxPQUFPLFNBQUksT0FBUyxDQUFDO1FBQ3ZDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUM7YUFDYixTQUFTLEVBQUU7YUFDWCxJQUFJLENBQUMsVUFBQSxRQUFRLElBQUksT0FBQSxRQUFRLENBQUMsSUFBSSxFQUFXLEVBQXhCLENBQXdCLENBQUM7YUFDMUMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRU8sa0NBQVcsR0FBbkIsVUFBb0IsS0FBVTtRQUM1QixPQUFPLENBQUMsS0FBSyxDQUFDLG1CQUFtQixFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsWUFBWTtRQUN2RCxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxJQUFJLEtBQUssQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFDSCxtQkFBQztBQUFELENBQUMsQUF6Q0QsSUF5Q0M7QUF6Q1ksWUFBWTtJQUR4QixpQkFBVSxFQUFFO3FDQU1lLFdBQUksRUFBa0Isc0NBQWlCO0dBTHRELFlBQVksQ0F5Q3hCO0FBekNZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9ICAgICBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSGVhZGVycywgSHR0cCB9ICBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9ICAgICBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5cclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL3RvUHJvbWlzZSc7XHJcblxyXG5pbXBvcnQgeyBNb3ZpZSB9ICAgICAgICAgICAgZnJvbSAnLi4vbW9kZWxzJztcclxuaW1wb3J0IHsgU2VhcmNoQ3JpdGVyaWEgfSAgIGZyb20gJy4uL21vZGVscyc7XHJcbmltcG9ydCB7IE1vdmllUmVzcG9uc2UgfSAgICBmcm9tICcuLi9tb2RlbHMnO1xyXG5pbXBvcnQgeyBDdXJyZW50U2VhcmNoIH0gICAgZnJvbSAnLi4vbW9kZWxzJztcclxuXHJcbmltcG9ydCB7IEVudmlyb25tZW50Q29uZmlnIH0gIGZyb20gJy4vZW52aXJvbm1lbnQtY29uZmlnJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIE1vdmllU2VydmljZSB7XHJcblxyXG4gIHByaXZhdGUgYmFzZVVybCA9ICcnO1xyXG4gIHByaXZhdGUgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHsnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfSk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCwgcHJpdmF0ZSBjb25maWc6IEVudmlyb25tZW50Q29uZmlnKXsgIFxyXG4gICAgdGhpcy5iYXNlVXJsID0gY29uZmlnLm1vdmllQXBpVXJsKCkgKyAnL2FwaS9tb3ZpZXMnO1xyXG4gIH1cclxuXHJcbiAgc2VhcmNoRm9yTW92aWVzV2l0aENyaXRlcmlhKGNyaXRlcmlhOiBTZWFyY2hDcml0ZXJpYSkgOiBPYnNlcnZhYmxlPE1vdmllUmVzcG9uc2U+e1xyXG4gICAgcmV0dXJuIHRoaXMuc2VhcmNoRm9yTW92aWVzKGNyaXRlcmlhLnNlYXJjaFRlcm0sIGNyaXRlcmlhLnNlbGVjdGVkQ2F0ZWdvcmllcywgY3JpdGVyaWEuY3VycmVudFNraXBTaXplLCBjcml0ZXJpYS5jdXJyZW50VGFrZVNpemUpO1xyXG4gIH1cclxuICBcclxuICBzZWFyY2hGb3JNb3ZpZXModGVybTogc3RyaW5nLCBjYXRlZ29yaWVzOiBBcnJheTxzdHJpbmc+LCBza2lwOiBudW1iZXIsIHRha2U6IG51bWJlcikgOiBPYnNlcnZhYmxlPE1vdmllUmVzcG9uc2U+eyAgICBcclxuICAgIHZhciBjYXRlZ29yeUxpc3QgPSAnJztcclxuICAgIGlmKGNhdGVnb3JpZXMgJiYgY2F0ZWdvcmllcy5sZW5ndGggPiAwKVxyXG4gICAge1xyXG4gICAgICBmb3IobGV0IGNhdGVnb3J5IG9mIGNhdGVnb3JpZXMpe1xyXG4gICAgICAgIGNhdGVnb3J5TGlzdCArPSAnJmNhdGVnb3JpZXM9JysgY2F0ZWdvcnk7XHJcbiAgICAgIH1cclxuICAgIH0gXHJcbiAgICBcclxuICAgIHRlcm0gPSB0ZXJtLnJlcGxhY2UoJyAnLCAnJTIwJyk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7dGhpcy5iYXNlVXJsfT9zZWFyY2hGaWx0ZXI9JHt0ZXJtfSR7Y2F0ZWdvcnlMaXN0fSZza2lwPSR7c2tpcH0mdGFrZT0ke3Rha2V9YClcclxuICAgICAgICAgICAgICAgICAgICAubWFwKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKTtcclxuICAgICAgICAgICAgICAgICAgICAvLy5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcclxuICB9XHJcblxyXG4gIGdldE1vdmllKG1vdmllSWQ6IG51bWJlcik6IFByb21pc2U8TW92aWU+IHtcclxuICAgIGxldCB1cmwgPSBgJHt0aGlzLmJhc2VVcmx9LyR7bW92aWVJZH1gO1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodXJsKVxyXG4gICAgICAgICAgICAgICAudG9Qcm9taXNlKClcclxuICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpIGFzIE1vdmllKVxyXG4gICAgICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGhhbmRsZUVycm9yKGVycm9yOiBhbnkpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgY29uc29sZS5lcnJvcignQW4gZXJyb3Igb2NjdXJyZWQnLCBlcnJvcik7IC8vIHRvZG86IGxvZ1xyXG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yLm1lc3NhZ2UgfHwgZXJyb3IpO1xyXG4gIH1cclxufSJdfQ==