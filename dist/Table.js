"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Table = void 0;
class Table {
    constructor(tableId) {
        this.tableId = tableId;
        this.customer = [];
        this.maximumTable = 4;
    }
    customerTable(...newcustomer) {
        this.customer = this.customer.concat(newcustomer);
    }
    isEqual(tableId) {
        return tableId == this.tableId;
    }
    customerTableSit() {
        if (this.isEqual(this.tableId)) {
            return this.customer;
        }
    }
}
exports.Table = Table;
