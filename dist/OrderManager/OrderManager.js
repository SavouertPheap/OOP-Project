"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
class Order {
    constructor() {
        this.customers = [];
        this.cusOrderFood = [];
    }
    getAllOrder() {
        return this;
    }
    addCustomer(customer) {
        this.customers.push(customer);
    }
    isEqual(customerId) {
        let message = false;
        for (let customer of this.customers) {
            if (customer.getCustomerId() == customerId) {
                message = true;
            }
        }
        return message;
    }
    addFoodCusOrder(...cusOrders) {
        this.cusOrderFood = this.cusOrderFood.concat(cusOrders);
    }
    getFoodCusOrder() {
        return this.cusOrderFood;
    }
    checkInMenu(cusOrderFood) {
        // return orderagain;
        let ans = "";
        for (let i = 0; i < this.cusOrderFood.length; i++) {
            let orderagain = this.cusOrderFood[i]['foodOrder'];
            for (let a = 0; a < orderagain.length; a++) {
                return ans += orderagain[a];
            }
        }
    }
}
exports.Order = Order;
