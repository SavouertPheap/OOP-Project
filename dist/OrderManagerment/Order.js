"use strict";
exports.__esModule = true;
exports.Order = void 0;
var Order = /** @class */ (function () {
    function Order() {
        this.table = [];
        this.menuItem = [];
    }
    // constructor(table:Table,menuItem:MenuItem){}
    Order.prototype.addMenuItem = function (item) {
        this.menuItem.push(item);
    };
    Order.prototype.addTable = function (table1) {
        this.table.push(table1);
    };
    return Order;
}());
exports.Order = Order;
