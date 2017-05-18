"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var services_1 = require("./services");
var AppComponent = (function () {
    function AppComponent(envConfig) {
        this.envConfig = envConfig;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.envConfig.initialize();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        template: "\n    <ActionBar title=\"Movies Native\"></ActionBar>\n    <page-router-outlet></page-router-outlet>\n  "
    }),
    __metadata("design:paramtypes", [services_1.EnvironmentConfig])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsdUNBQStDO0FBUy9DLElBQWEsWUFBWTtJQUV2QixzQkFBb0IsU0FBNEI7UUFBNUIsY0FBUyxHQUFULFNBQVMsQ0FBbUI7SUFDaEQsQ0FBQztJQUVELCtCQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFDSCxtQkFBQztBQUFELENBQUMsQUFSRCxJQVFDO0FBUlksWUFBWTtJQVB4QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFFBQVE7UUFDbEIsUUFBUSxFQUFFLDBHQUdUO0tBQ0YsQ0FBQztxQ0FHK0IsNEJBQWlCO0dBRnJDLFlBQVksQ0FReEI7QUFSWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEVudmlyb25tZW50Q29uZmlnIH0gZnJvbSAnLi9zZXJ2aWNlcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJteS1hcHBcIixcbiAgdGVtcGxhdGU6IGBcbiAgICA8QWN0aW9uQmFyIHRpdGxlPVwiTW92aWVzIE5hdGl2ZVwiPjwvQWN0aW9uQmFyPlxuICAgIDxwYWdlLXJvdXRlci1vdXRsZXQ+PC9wYWdlLXJvdXRlci1vdXRsZXQ+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZW52Q29uZmlnOiBFbnZpcm9ubWVudENvbmZpZyl7XG4gIH1cblxuICBuZ09uSW5pdCgpe1xuICAgIHRoaXMuZW52Q29uZmlnLmluaXRpYWxpemUoKTtcbiAgfVxufVxuIl19