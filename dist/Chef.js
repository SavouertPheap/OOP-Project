"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Chef = void 0;
const Person_1 = require("./Person");
const Status_1 = require("./Status");
class Chef extends Person_1.Person {
    constructor(name, gender) {
        super(name, gender);
        this.name = name;
        this.gender = gender;
        this.order = [];
        this.staute = Status_1.Staute.Inprogress;
    }
    addOrder(order) {
        this.order.push(order);
    }
    getStatue() {
        return this.staute;
    }
    setStaute(newStatue) {
        return this.staute = newStatue;
    }
}
exports.Chef = Chef;
