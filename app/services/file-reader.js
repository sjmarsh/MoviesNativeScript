"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("file-system");
var documents = fs.knownFolders.currentApp();
var FileReader = (function () {
    function FileReader() {
    }
    FileReader.readJSONAsync = function (path) {
        var jsonFile = documents.getFile(path);
        return new Promise(function (resolve, reject) {
            jsonFile.readText().then(function (content) {
                var data = JSON.parse(content);
                resolve(data);
            })
                .catch(function (err) {
                console.log('Error reading File!');
                reject(err);
            });
        });
    };
    FileReader.readJSONSync = function (path) {
        var jsonFile = documents.getFile(path);
        var content = jsonFile.readTextSync(function (err) { return console.log('Error reading File!'); });
        return JSON.parse(content);
    };
    return FileReader;
}());
exports.FileReader = FileReader;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS1yZWFkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmaWxlLXJlYWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGdDQUFrQztBQUNsQyxJQUFJLFNBQVMsR0FBRyxFQUFFLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxDQUFDO0FBRTdDO0lBQUE7SUFxQkEsQ0FBQztJQW5CaUIsd0JBQWEsR0FBM0IsVUFBNEIsSUFBWTtRQUNwQyxJQUFJLFFBQVEsR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZDLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBUyxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQ3ZDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQyxPQUFlO2dCQUNyQyxJQUFJLElBQUksR0FBa0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDOUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2xCLENBQUMsQ0FBQztpQkFDRCxLQUFLLENBQUMsVUFBQyxHQUFHO2dCQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQztnQkFDbkMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2hCLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRWEsdUJBQVksR0FBMUIsVUFBMkIsSUFBWTtRQUNyQyxJQUFJLFFBQVEsR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZDLElBQUksT0FBTyxHQUFHLFFBQVEsQ0FBQyxZQUFZLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLEVBQWxDLENBQWtDLENBQUMsQ0FBQztRQUMvRSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBQ0wsaUJBQUM7QUFBRCxDQUFDLEFBckJELElBcUJDO0FBckJZLGdDQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZnMgZnJvbSBcImZpbGUtc3lzdGVtXCI7XHJcbmxldCBkb2N1bWVudHMgPSBmcy5rbm93bkZvbGRlcnMuY3VycmVudEFwcCgpO1xyXG5cclxuZXhwb3J0IGNsYXNzIEZpbGVSZWFkZXIge1xyXG4gICAgXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRKU09OQXN5bmMocGF0aDogc3RyaW5nKTogUHJvbWlzZTxPYmplY3Q+IHtcclxuICAgICAgICBsZXQganNvbkZpbGUgPSBkb2N1bWVudHMuZ2V0RmlsZShwYXRoKTtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8T2JqZWN0PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGpzb25GaWxlLnJlYWRUZXh0KCkudGhlbigoY29udGVudDogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IDxBcnJheTxPYmplY3Q+PkpTT04ucGFyc2UoY29udGVudCk7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKGRhdGEpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yIHJlYWRpbmcgRmlsZSEnKTtcclxuICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRKU09OU3luYyhwYXRoOiBzdHJpbmcpOiBPYmplY3Qge1xyXG4gICAgICBsZXQganNvbkZpbGUgPSBkb2N1bWVudHMuZ2V0RmlsZShwYXRoKTtcclxuICAgICAgdmFyIGNvbnRlbnQgPSBqc29uRmlsZS5yZWFkVGV4dFN5bmMoZXJyID0+IGNvbnNvbGUubG9nKCdFcnJvciByZWFkaW5nIEZpbGUhJykpO1xyXG4gICAgICByZXR1cm4gSlNPTi5wYXJzZShjb250ZW50KTtcclxuICAgIH1cclxufSJdfQ==