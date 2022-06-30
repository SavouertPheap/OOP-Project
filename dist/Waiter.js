"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Waiter = void 0;
class Waiter {
    constructor() {
        this.orders = [];
        this.salary = 0;
        // addCustomer(customer:Customer){
        //     this.customers.push(customer);
        // }
        // isEqual(customerId:number):boolean{
        //     let message = false;
        //     for(let customer of this.customers){
        //         if(customer.getCustomerId() == customerId){
        //             message = true
        //         }
        //     }
        //     return message;
        // }
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
