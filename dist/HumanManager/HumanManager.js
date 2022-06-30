"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HumanManager = void 0;
class HumanManager {
    constructor() {
        this.chefs = [];
        this.waiters = [];
    }
    addChef(...chefs) {
        return this.chefs = this.chefs.concat(chefs);
    }
    addWaiter(...wainters) {
        return this.waiters = this.waiters.concat(wainters);
    }
    getStaff() {
        return this;
    }
}
exports.HumanManager = HumanManager;
