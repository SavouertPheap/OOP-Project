"use strict";
exports.__esModule = true;
exports.HumanManager = void 0;
var HumanManager = /** @class */ (function () {
    function HumanManager() {
        this.chef = [];
        this.customer = [];
        this.waiter = [];
    }
    HumanManager.prototype.addCustomer = function (customer) {
        this.customer.push(customer);
    };
    HumanManager.prototype.addChef = function (Chef) {
        this.chef.push(Chef);
    };
    return HumanManager;
}());
exports.HumanManager = HumanManager;
