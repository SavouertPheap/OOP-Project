"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuItem = void 0;
class MenuItem {
    constructor(id, foodName, price) {
        this.id = id;
        this.foodName = foodName;
        this.price = price;
    }
    getPrice() {
        return this.price;
    }
    getName() {
        return this.foodName;
    }
}
exports.MenuItem = MenuItem;
