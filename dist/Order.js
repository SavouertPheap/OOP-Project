"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
class Order {
    constructor() {
        this.customers = [];
        this.menuItem = [];
        this.cusOrderFood = [];
        // sumPrice():number{
        //     let sum = this.getPriceMenuItem(men);
        // }
    }
    addMenuItem(...menuItems) {
        this.menuItem = this.menuItem.concat(menuItems);
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
    checkMenuItem(MenuItem) {
        for (let item of this.menuItem) {
            return item.getName();
        }
    }
    isEquals(menu, menuItem) {
        return this.checkInMenu(menu) == this.checkMenuItem(menuItem);
    }
    getPriceMenuItem(menuItem) {
        let prices = 0;
        return prices += menuItem.getPrice();
    }
}
exports.Order = Order;
