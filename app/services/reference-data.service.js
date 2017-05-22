"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var environment_config_1 = require("./environment-config");
var ReferenceDataService = (function () {
    function ReferenceDataService(http, config) {
        this.http = http;
        this.config = config;
        this.baseUrl = '';
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.baseUrl = config.movieApiUrl() + '/api/referenceData';
    }
    ReferenceDataService.prototype.getCategories = function () {
        return this.http.get(this.baseUrl + '/categories')
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ;
    ReferenceDataService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // todo use toastr + log
        return Promise.reject(error.message || error);
    };
    return ReferenceDataService;
}());
ReferenceDataService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, environment_config_1.EnvironmentConfig])
], ReferenceDataService);
exports.ReferenceDataService = ReferenceDataService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVmZXJlbmNlLWRhdGEuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlZmVyZW5jZS1kYXRhLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0Msc0NBQThDO0FBRTlDLDJEQUEwRDtBQUcxRCxJQUFhLG9CQUFvQjtJQUkvQiw4QkFBb0IsSUFBVSxFQUFVLE1BQXlCO1FBQTdDLFNBQUksR0FBSixJQUFJLENBQU07UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFtQjtRQUh6RCxZQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2IsWUFBTyxHQUFHLElBQUksY0FBTyxDQUFDLEVBQUMsY0FBYyxFQUFFLGtCQUFrQixFQUFDLENBQUMsQ0FBQztRQUdsRSxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxXQUFXLEVBQUUsR0FBRyxvQkFBb0IsQ0FBQztJQUM3RCxDQUFDO0lBRUQsNENBQWEsR0FBYjtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLGFBQWEsQ0FBQzthQUN0QyxTQUFTLEVBQUU7YUFDWCxJQUFJLENBQUMsVUFBQSxRQUFRLElBQUksT0FBQSxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQWYsQ0FBZSxDQUFDO2FBQ2pDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUFBLENBQUM7SUFFTSwwQ0FBVyxHQUFuQixVQUFvQixLQUFVO1FBQzVCLE9BQU8sQ0FBQyxLQUFLLENBQUMsbUJBQW1CLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyx3QkFBd0I7UUFDbkUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sSUFBSSxLQUFLLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRUgsMkJBQUM7QUFBRCxDQUFDLEFBcEJELElBb0JDO0FBcEJZLG9CQUFvQjtJQURoQyxpQkFBVSxFQUFFO3FDQUtlLFdBQUksRUFBa0Isc0NBQWlCO0dBSnRELG9CQUFvQixDQW9CaEM7QUFwQlksb0RBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIZWFkZXJzLCBIdHRwIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcblxyXG5pbXBvcnQgeyBFbnZpcm9ubWVudENvbmZpZyB9ICBmcm9tICcuL2Vudmlyb25tZW50LWNvbmZpZyc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBSZWZlcmVuY2VEYXRhU2VydmljZSB7XHJcbiAgcHJpdmF0ZSBiYXNlVXJsID0gJyc7XHJcbiAgcHJpdmF0ZSBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9KTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwLCBwcml2YXRlIGNvbmZpZzogRW52aXJvbm1lbnRDb25maWcgKXtcclxuICAgIHRoaXMuYmFzZVVybCA9IGNvbmZpZy5tb3ZpZUFwaVVybCgpICsgJy9hcGkvcmVmZXJlbmNlRGF0YSc7XHJcbiAgfVxyXG5cclxuICBnZXRDYXRlZ29yaWVzKCk6IFByb21pc2U8c3RyaW5nW10+IHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuYmFzZVVybCArICcvY2F0ZWdvcmllcycpXHJcbiAgICAgICAgICAgICAgIC50b1Byb21pc2UoKVxyXG4gICAgICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcclxuICB9O1xyXG5cclxuICBwcml2YXRlIGhhbmRsZUVycm9yKGVycm9yOiBhbnkpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgY29uc29sZS5lcnJvcignQW4gZXJyb3Igb2NjdXJyZWQnLCBlcnJvcik7IC8vIHRvZG8gdXNlIHRvYXN0ciArIGxvZ1xyXG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yLm1lc3NhZ2UgfHwgZXJyb3IpO1xyXG4gIH1cclxuXHJcbn0iXX0=