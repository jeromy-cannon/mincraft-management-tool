import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var Tab2Page = /** @class */ (function () {
    function Tab2Page(appService) {
        this.appService = appService;
    }
    Tab2Page.prototype.onBackup = function () {
        console.log('restoring...');
        console.log('...restored');
    };
    Tab2Page.prototype.onRestore = function () {
        console.log('backing up...');
        console.log('...backed up');
    };
    var _a;
    Tab2Page = tslib_1.__decorate([
        Component({
            selector: 'app-tab2',
            templateUrl: 'tab2.page.html',
            styleUrls: ['tab2.page.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof AppService !== "undefined" && AppService) === "function" ? _a : Object])
    ], Tab2Page);
    return Tab2Page;
}());
export { Tab2Page };
//# sourceMappingURL=tab2.page.js.map