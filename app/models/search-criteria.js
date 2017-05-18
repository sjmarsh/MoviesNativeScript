"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SearchCriteria = (function () {
    function SearchCriteria(searchTerm, selectedCategories, currentSkipSize, currentTakeSize) {
        if (searchTerm === void 0) { searchTerm = ''; }
        if (selectedCategories === void 0) { selectedCategories = new Array(); }
        if (currentSkipSize === void 0) { currentSkipSize = 0; }
        if (currentTakeSize === void 0) { currentTakeSize = 0; }
        this.searchTerm = searchTerm;
        this.selectedCategories = selectedCategories;
        this.currentSkipSize = currentSkipSize;
        this.currentTakeSize = currentTakeSize;
    }
    return SearchCriteria;
}());
exports.SearchCriteria = SearchCriteria;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWNyaXRlcmlhLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2VhcmNoLWNyaXRlcmlhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7SUFPRSx3QkFDRSxVQUFlLEVBQ2Ysa0JBQXdDLEVBQ3hDLGVBQW1CLEVBQ25CLGVBQW1CO1FBSG5CLDJCQUFBLEVBQUEsZUFBZTtRQUNmLG1DQUFBLEVBQUEseUJBQXlCLEtBQUssRUFBVTtRQUN4QyxnQ0FBQSxFQUFBLG1CQUFtQjtRQUNuQixnQ0FBQSxFQUFBLG1CQUFtQjtRQUVuQixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUM3QixJQUFJLENBQUMsa0JBQWtCLEdBQUcsa0JBQWtCLENBQUM7UUFDN0MsSUFBSSxDQUFDLGVBQWUsR0FBRyxlQUFlLENBQUM7UUFDdkMsSUFBSSxDQUFDLGVBQWUsR0FBRyxlQUFlLENBQUM7SUFDekMsQ0FBQztJQUNILHFCQUFDO0FBQUQsQ0FBQyxBQWxCRCxJQWtCQztBQWxCWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBTZWFyY2hDcml0ZXJpYSB7XHJcbiAgXHJcbiAgcHVibGljIHNlYXJjaFRlcm0gOiBzdHJpbmc7XHJcbiAgcHVibGljIHNlbGVjdGVkQ2F0ZWdvcmllczogQXJyYXk8c3RyaW5nPjtcclxuICBwdWJsaWMgY3VycmVudFNraXBTaXplOiBudW1iZXI7XHJcbiAgcHVibGljIGN1cnJlbnRUYWtlU2l6ZTogbnVtYmVyO1xyXG4gIFxyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihcclxuICAgIHNlYXJjaFRlcm0gPSAnJyxcclxuICAgIHNlbGVjdGVkQ2F0ZWdvcmllcyA9IG5ldyBBcnJheTxzdHJpbmc+KCksXHJcbiAgICBjdXJyZW50U2tpcFNpemUgPSAwLFxyXG4gICAgY3VycmVudFRha2VTaXplID0gMFxyXG4gICl7XHJcbiAgICB0aGlzLnNlYXJjaFRlcm0gPSBzZWFyY2hUZXJtO1xyXG4gICAgdGhpcy5zZWxlY3RlZENhdGVnb3JpZXMgPSBzZWxlY3RlZENhdGVnb3JpZXM7XHJcbiAgICB0aGlzLmN1cnJlbnRTa2lwU2l6ZSA9IGN1cnJlbnRTa2lwU2l6ZTtcclxuICAgIHRoaXMuY3VycmVudFRha2VTaXplID0gY3VycmVudFRha2VTaXplO1xyXG4gIH1cclxufSJdfQ==