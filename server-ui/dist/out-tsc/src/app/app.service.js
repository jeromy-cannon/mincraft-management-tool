import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
var AppService = /** @class */ (function () {
    function AppService(http) {
        this.http = http;
    }
    AppService.prototype.runBackup = function () {
        this.http.get('http://localhost:3000/rest/mc/backup').subscribe(function (resData) {
            console.log(resData);
        });
    };
    AppService.prototype.runRestore = function () {
        this.http.get('http://localhost:3000/rest/mc/restore').subscribe(function (resData) {
            console.log(resData);
        });
    };
    AppService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], AppService);
    return AppService;
}());
export { AppService };
//# sourceMappingURL=app.service.js.map