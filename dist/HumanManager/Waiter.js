"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Waiter = void 0;
class Waiter {
    constructor() {
        this.orders = [];
        this.salary = 0;
    }
    setSalary(salary) {
        this.salary = salary;
    }
    getSalary() {
        return this.salary;
    }
    CreateOrder(customerId, tableId, order1) {
        this.orders.push(order1);
    }
    getOrder() {
        return this.orders;
    }
}
exports.Waiter = Waiter;
