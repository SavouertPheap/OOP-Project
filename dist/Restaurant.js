"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Resturant = void 0;
const HumanManager_1 = require("./HumanManager/HumanManager");
class Resturant {
    constructor(name, location) {
        this.name = name;
        this.location = location;
        // public services
        this.people = new HumanManager_1.HumanManager();
        this.menuItems = [];
        this.customers = [];
    }
    addMeunItem(...Menu) {
        return this.menuItems = this.menuItems.concat(Menu);
    }
    addCustomer(...customers) {
        return this.customers = this.customers.concat(customers);
    }
}
exports.Resturant = Resturant;
