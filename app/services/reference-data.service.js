"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var ReferenceDataService = (function () {
    function ReferenceDataService(http) {
        this.http = http;
        //private baseUrl = environment.movieApiUrl + '/api/referenceData';
        this.baseUrl = '';
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var env = this.getEnvironmentData();
        this.baseUrl = env.movieApiUrl + '/api/movies';
    }
    ReferenceDataService.prototype.getEnvironmentData = function () {
        var data = {};
        this.http.get('../environment.json').subscribe(function (env) { return data = env.json(); });
        return data;
    };
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
    __metadata("design:paramtypes", [http_1.Http])
], ReferenceDataService);
exports.ReferenceDataService = ReferenceDataService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVmZXJlbmNlLWRhdGEuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlZmVyZW5jZS1kYXRhLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0Msc0NBQThDO0FBSTlDLElBQWEsb0JBQW9CO0lBSy9CLDhCQUFvQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUo5QixtRUFBbUU7UUFDM0QsWUFBTyxHQUFHLEVBQUUsQ0FBQztRQUNiLFlBQU8sR0FBRyxJQUFJLGNBQU8sQ0FBQyxFQUFDLGNBQWMsRUFBRSxrQkFBa0IsRUFBQyxDQUFDLENBQUM7UUFHbEUsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDcEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUMsV0FBVyxHQUFHLGFBQWEsQ0FBQztJQUNqRCxDQUFDO0lBRU8saURBQWtCLEdBQTFCO1FBQ0UsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ2QsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxHQUFHLElBQUssT0FBQSxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFqQixDQUFpQixDQUFDLENBQUM7UUFDMUUsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRCw0Q0FBYSxHQUFiO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsYUFBYSxDQUFDO2FBQ3RDLFNBQVMsRUFBRTthQUNYLElBQUksQ0FBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBZixDQUFlLENBQUM7YUFDakMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBQUEsQ0FBQztJQUVNLDBDQUFXLEdBQW5CLFVBQW9CLEtBQVU7UUFDNUIsT0FBTyxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLHdCQUF3QjtRQUNuRSxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxJQUFJLEtBQUssQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFSCwyQkFBQztBQUFELENBQUMsQUE1QkQsSUE0QkM7QUE1Qlksb0JBQW9CO0lBRGhDLGlCQUFVLEVBQUU7cUNBTWUsV0FBSTtHQUxuQixvQkFBb0IsQ0E0QmhDO0FBNUJZLG9EQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSGVhZGVycywgSHR0cCB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFJlZmVyZW5jZURhdGFTZXJ2aWNlIHtcclxuICAvL3ByaXZhdGUgYmFzZVVybCA9IGVudmlyb25tZW50Lm1vdmllQXBpVXJsICsgJy9hcGkvcmVmZXJlbmNlRGF0YSc7XHJcbiAgcHJpdmF0ZSBiYXNlVXJsID0gJyc7XHJcbiAgcHJpdmF0ZSBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9KTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKXtcclxuICAgIHZhciBlbnYgPSB0aGlzLmdldEVudmlyb25tZW50RGF0YSgpO1xyXG4gICAgdGhpcy5iYXNlVXJsID0gZW52Lm1vdmllQXBpVXJsICsgJy9hcGkvbW92aWVzJztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0RW52aXJvbm1lbnREYXRhKCk6IGFueXtcclxuICAgIGxldCBkYXRhID0ge307XHJcbiAgICB0aGlzLmh0dHAuZ2V0KCcuLi9lbnZpcm9ubWVudC5qc29uJykuc3Vic2NyaWJlKGVudiA9PiAgZGF0YSA9IGVudi5qc29uKCkpO1xyXG4gICAgcmV0dXJuIGRhdGE7XHJcbiAgfVxyXG5cclxuICBnZXRDYXRlZ29yaWVzKCk6IFByb21pc2U8c3RyaW5nW10+IHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuYmFzZVVybCArICcvY2F0ZWdvcmllcycpXHJcbiAgICAgICAgICAgICAgIC50b1Byb21pc2UoKVxyXG4gICAgICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcclxuICB9O1xyXG5cclxuICBwcml2YXRlIGhhbmRsZUVycm9yKGVycm9yOiBhbnkpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgY29uc29sZS5lcnJvcignQW4gZXJyb3Igb2NjdXJyZWQnLCBlcnJvcik7IC8vIHRvZG8gdXNlIHRvYXN0ciArIGxvZ1xyXG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yLm1lc3NhZ2UgfHwgZXJyb3IpO1xyXG4gIH1cclxuXHJcbn0iXX0=