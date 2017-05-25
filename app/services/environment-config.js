"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var file_reader_1 = require("./file-reader");
var EnvironmentConfig = (function () {
    function EnvironmentConfig() {
    }
    /**
     * Initialize environment config settings
     */
    EnvironmentConfig.prototype.initialize = function () {
        console.log('Initialize Environment!');
        this.configData = file_reader_1.FileReader.readJSONSync('environment.json');
        console.log('Done initializing environment.');
        console.log("Running in " + this.configData.environment + " mode.");
    };
    EnvironmentConfig.prototype.movieApiUrl = function () {
        if (this.configData == null) {
            throw ('Error: Environment config was not initialized.');
        }
        else {
            return this.configData.movieApiUrl;
        }
    };
    EnvironmentConfig.prototype.environment = function () {
        if (this.configData == null) {
            throw ('Error: Environment config was not initialized.');
        }
        else {
            return this.configData.environment;
        }
    };
    return EnvironmentConfig;
}());
EnvironmentConfig = __decorate([
    core_1.Injectable()
], EnvironmentConfig);
exports.EnvironmentConfig = EnvironmentConfig;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW52aXJvbm1lbnQtY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZW52aXJvbm1lbnQtY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLDZDQUEyQztBQUczQyxJQUFhLGlCQUFpQjtJQUE5QjtJQW1DQSxDQUFDO0lBNUJEOztPQUVHO0lBQ0Qsc0NBQVUsR0FBVjtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMseUJBQXlCLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsVUFBVSxHQUFHLHdCQUFVLENBQUMsWUFBWSxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDOUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQzlDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLFdBQVEsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7SUFFRCx1Q0FBVyxHQUFYO1FBQ0UsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsQ0FBQSxDQUFDO1lBQzFCLE1BQUssQ0FBQyxnREFBZ0QsQ0FBQyxDQUFBO1FBQ3pELENBQUM7UUFDRCxJQUFJLENBQUMsQ0FBQztZQUNKLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQztRQUNyQyxDQUFDO0lBQ0gsQ0FBQztJQUVELHVDQUFXLEdBQVg7UUFDRSxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxDQUFBLENBQUM7WUFDMUIsTUFBSyxDQUFDLGdEQUFnRCxDQUFDLENBQUE7UUFDekQsQ0FBQztRQUNELElBQUksQ0FBQyxDQUFDO1lBQ0osTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDO1FBQ3JDLENBQUM7SUFDSCxDQUFDO0lBRUgsd0JBQUM7QUFBRCxDQUFDLEFBbkNELElBbUNDO0FBbkNZLGlCQUFpQjtJQUQ3QixpQkFBVSxFQUFFO0dBQ0EsaUJBQWlCLENBbUM3QjtBQW5DWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZpbGVSZWFkZXIgfSBmcm9tIFwiLi9maWxlLXJlYWRlclwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRW52aXJvbm1lbnRDb25maWcge1xyXG5cclxuICAvLyBub3RlIHJlLiB1c2luZyBsb2NhbGhvc3Qgd2l0aCBhbmRyb2lkIGVtdWxhdG9yLiBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzM5OTQ4NTk1L2ZldGNoLWFwaWNhbi1ub3QtZ2V0LWRhdGEtZnJvbS1sb2NhbGhvc3QvMzk5NTg5NTVcclxuICAvLyB0aGVyZWZvcmUgZG9uJ3QgdXNlIGxvY2FsaG9zdC4gIFVzZSAxMC4wLjIuMiBpbnN0ZWFkXHJcblxyXG4gIHByaXZhdGUgY29uZmlnRGF0YTtcclxuXHJcbi8qKlxyXG4gKiBJbml0aWFsaXplIGVudmlyb25tZW50IGNvbmZpZyBzZXR0aW5nc1xyXG4gKi9cclxuICBpbml0aWFsaXplKCkgOiB2b2lke1xyXG4gICAgY29uc29sZS5sb2coJ0luaXRpYWxpemUgRW52aXJvbm1lbnQhJyk7XHJcbiAgICB0aGlzLmNvbmZpZ0RhdGEgPSBGaWxlUmVhZGVyLnJlYWRKU09OU3luYygnZW52aXJvbm1lbnQuanNvbicpO1xyXG4gICAgY29uc29sZS5sb2coJ0RvbmUgaW5pdGlhbGl6aW5nIGVudmlyb25tZW50LicpO1xyXG4gICAgY29uc29sZS5sb2coYFJ1bm5pbmcgaW4gJHt0aGlzLmNvbmZpZ0RhdGEuZW52aXJvbm1lbnR9IG1vZGUuYCk7XHJcbiAgfVxyXG5cclxuICBtb3ZpZUFwaVVybCgpIDogc3RyaW5ne1xyXG4gICAgaWYodGhpcy5jb25maWdEYXRhID09IG51bGwpe1xyXG4gICAgICB0aHJvdygnRXJyb3I6IEVudmlyb25tZW50IGNvbmZpZyB3YXMgbm90IGluaXRpYWxpemVkLicpXHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgcmV0dXJuIHRoaXMuY29uZmlnRGF0YS5tb3ZpZUFwaVVybDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGVudmlyb25tZW50KCkgOiBzdHJpbmd7XHJcbiAgICBpZih0aGlzLmNvbmZpZ0RhdGEgPT0gbnVsbCl7XHJcbiAgICAgIHRocm93KCdFcnJvcjogRW52aXJvbm1lbnQgY29uZmlnIHdhcyBub3QgaW5pdGlhbGl6ZWQuJylcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICByZXR1cm4gdGhpcy5jb25maWdEYXRhLmVudmlyb25tZW50O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuXHJcbiJdfQ==