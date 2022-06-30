"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Customer_1 = require("./Customer");
const Menu_1 = require("./Menu");
const MenuItem_1 = require("./MenuItem");
const Order_1 = require("./Order");
const Table_1 = require("./Table");
const Waiter_1 = require("./Waiter");
let customer1 = new Customer_1.Customer(1, 'savouert');
let customer2 = new Customer_1.Customer(2, "sopheim");
// console.log(customer1.getCustomerId());
let table1 = new Table_1.Table(1);
let table2 = new Table_1.Table(2);
let order1 = new Order_1.Order();
//  order1.orderFood(['Pizz',"ddd"]);
let waiter1 = new Waiter_1.Waiter();
waiter1.CreateOrder(1, 1, order1);
order1.addCustomer(customer1);
let menu1 = new MenuItem_1.MenuItem(1, 'ddd', 15);
let menu2 = new MenuItem_1.MenuItem(2, 'dd', 15);
order1.addMenuItem(menu1, menu2);
// order1.isMenuEqual(order1)
let orders = new Menu_1.Menu(['ddd', 'dd1']);
order1.addFoodCusOrder(orders);
// console.log(order1);
// console.log(order1.checkInMenu(orders));
// checkInMenu
// console.log(order1.isEquals(orders,menu1));
console.log(order1.getPriceMenuItem(menu1));
// console.log(waiter1.isEqual(1));/
