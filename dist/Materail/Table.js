"use strict";
exports.__esModule = true;
exports.Table = void 0;
var Table = /** @class */ (function () {
    function Table(tableId) {
        this.tableId = tableId;
        this.customer = [];
    }
    Table.prototype.push = function (table1) {
        throw new Error("Method not implemented.");
    };
    Table.prototype.customerTable = function () {
        var newcustomer = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            newcustomer[_i] = arguments[_i];
        }
        this.customer = this.customer.concat(newcustomer);
    };
    return Table;
}());
exports.Table = Table;
