"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Chef = void 0;
const Person_1 = require("./Person");
class Chef extends Person_1.Person {
    constructor(name, gender) {
        super(name, gender);
        this.name = name;
        this.gender = gender;
        this.order = [];
        this.salary = 0;
        this.staute = Person_1.Staute.Inprogress;
    }
    setSalary(salary) {
        this.salary = salary;
    }
    getSalary() {
        return this.salary;
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
