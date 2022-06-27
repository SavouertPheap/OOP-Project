"use strict";
exports.__esModule = true;
exports.Waiter = void 0;
var Waiter = /** @class */ (function () {
    function Waiter(customer) {
        this.customer = [];
    }
    Waiter.prototype.proviceservice = function () {
        var customer = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            customer[_i] = arguments[_i];
        }
        this.customer = this.customer.concat(customer);
    };
    return Waiter;
}());
exports.Waiter = Waiter;
