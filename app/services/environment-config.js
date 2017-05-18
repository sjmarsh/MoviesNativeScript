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
    };
    EnvironmentConfig.prototype.movieApiUrl = function () {
        if (this.configData == null) {
            throw ('Error: Environment config was not initialized.');
        }
        else {
            return this.configData.movieApiUrl;
        }
    };
    return EnvironmentConfig;
}());
EnvironmentConfig = __decorate([
    core_1.Injectable()
], EnvironmentConfig);
exports.EnvironmentConfig = EnvironmentConfig;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW52aXJvbm1lbnQtY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZW52aXJvbm1lbnQtY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLDZDQUEyQztBQUczQyxJQUFhLGlCQUFpQjtJQUE5QjtJQXlCQSxDQUFDO0lBbEJEOztPQUVHO0lBQ0Qsc0NBQVUsR0FBVjtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMseUJBQXlCLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsVUFBVSxHQUFHLHdCQUFVLENBQUMsWUFBWSxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDOUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFRCx1Q0FBVyxHQUFYO1FBQ0UsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsQ0FBQSxDQUFDO1lBQzFCLE1BQUssQ0FBQyxnREFBZ0QsQ0FBQyxDQUFBO1FBQ3pELENBQUM7UUFDRCxJQUFJLENBQUMsQ0FBQztZQUNKLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQztRQUNyQyxDQUFDO0lBQ0gsQ0FBQztJQUVILHdCQUFDO0FBQUQsQ0FBQyxBQXpCRCxJQXlCQztBQXpCWSxpQkFBaUI7SUFEN0IsaUJBQVUsRUFBRTtHQUNBLGlCQUFpQixDQXlCN0I7QUF6QlksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGaWxlUmVhZGVyIH0gZnJvbSBcIi4vZmlsZS1yZWFkZXJcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEVudmlyb25tZW50Q29uZmlnIHtcclxuXHJcbiAgLy8gbm90ZSByZS4gdXNpbmcgbG9jYWxob3N0IHdpdGggYW5kcm9pZCBlbXVsYXRvci4gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8zOTk0ODU5NS9mZXRjaC1hcGljYW4tbm90LWdldC1kYXRhLWZyb20tbG9jYWxob3N0LzM5OTU4OTU1XHJcbiAgLy8gdGhlcmVmb3JlIGRvbid0IHVzZSBsb2NhbGhvc3QuICBVc2UgMTAuMC4yLjIgaW5zdGVhZFxyXG5cclxuICBwcml2YXRlIGNvbmZpZ0RhdGE7XHJcblxyXG4vKipcclxuICogSW5pdGlhbGl6ZSBlbnZpcm9ubWVudCBjb25maWcgc2V0dGluZ3NcclxuICovXHJcbiAgaW5pdGlhbGl6ZSgpIDogdm9pZHtcclxuICAgIGNvbnNvbGUubG9nKCdJbml0aWFsaXplIEVudmlyb25tZW50IScpO1xyXG4gICAgdGhpcy5jb25maWdEYXRhID0gRmlsZVJlYWRlci5yZWFkSlNPTlN5bmMoJ2Vudmlyb25tZW50Lmpzb24nKTtcclxuICAgIGNvbnNvbGUubG9nKCdEb25lIGluaXRpYWxpemluZyBlbnZpcm9ubWVudC4nKTtcclxuICB9XHJcblxyXG4gIG1vdmllQXBpVXJsKCkgOiBzdHJpbmd7XHJcbiAgICBpZih0aGlzLmNvbmZpZ0RhdGEgPT0gbnVsbCl7XHJcbiAgICAgIHRocm93KCdFcnJvcjogRW52aXJvbm1lbnQgY29uZmlnIHdhcyBub3QgaW5pdGlhbGl6ZWQuJylcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICByZXR1cm4gdGhpcy5jb25maWdEYXRhLm1vdmllQXBpVXJsO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuXHJcbiJdfQ==