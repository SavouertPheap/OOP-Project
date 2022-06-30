"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
class Customer {
    constructor(customerId, name) {
        this.customerId = customerId;
        this.name = name;
    }
    getCustomerId() {
        return this.customerId;
    }
}
exports.Customer = Customer;
