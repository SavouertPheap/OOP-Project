"use strict";
exports.__esModule = true;
exports.MenuItem = void 0;
var MenuItem = /** @class */ (function () {
    function MenuItem() {
        this.menu = [];
    }
    MenuItem.prototype.addMenu = function (menus) {
        this.menu.push(menus);
    };
    return MenuItem;
}());
exports.MenuItem = MenuItem;
