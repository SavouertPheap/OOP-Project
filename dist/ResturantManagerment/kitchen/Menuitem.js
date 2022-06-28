"use strict";
exports.__esModule = true;
exports.MenuItem = void 0;
var MenuItem = /** @class */ (function () {
    function MenuItem() {
        this.menu = [];
    }
    MenuItem.prototype.addMenu = function (menu1) {
        throw new Error("Method not implemented.");
    };
    MenuItem.prototype.addFood = function () {
        var newmenus = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            newmenus[_i] = arguments[_i];
        }
        this.menu = this.menu.concat(newmenus);
    };
    return MenuItem;
}());
exports.MenuItem = MenuItem;
