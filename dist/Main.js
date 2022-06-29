"use strict";
exports.__esModule = true;
var Table_1 = require("./Materail/Table");
var Customer_1 = require("./Customer");
var Gender_1 = require("./staff/Gender");
var Waiter_1 = require("./staff/Waiter");
var Resturant_1 = require("./ResturantManagerment/Resturant");
var Menu_1 = require("./ResturantManagerment/kitchen/Menu");
var Menuitem_1 = require("./ResturantManagerment/kitchen/Menuitem");
var Order_1 = require("./OrderManagerment/Order");
var Chef_1 = require("./staff/Chef");
// resturant
var reterants = new Resturant_1.Resturant('Best-Food', 'Phnom penh city');
// customer that came in resterant
var sophiem = new Customer_1.Customer('Sophiem', Gender_1.Gender.Female);
var savouert = new Customer_1.Customer('Savouert', Gender_1.Gender.Female);
reterants.people.addCustomer(savouert);
// waiter in resterant 
var phearun = new Waiter_1.Waiter(sophiem);
phearun.proviceservice(savouert, sophiem);
reterants.people.addWaiter(phearun);
var mengyi = new Waiter_1.Waiter(sophiem);
mengyi.proviceservice(savouert, sophiem);
reterants.people.addWaiter(mengyi);
// table1
var table1 = new Table_1.Table(1);
var table2 = new Table_1.Table(2);
table1.customerTable(savouert);
table2.customerTable(sophiem);
console.log(table1.customerTableSit());
console.log(table2.getTable());
// menu 
var menu1 = new Menu_1.Menu(1, 'pizza', 20);
var menu2 = new Menu_1.Menu(2, 'beaf', 35);
var menu3 = new Menu_1.Menu(3, 'crap', 30);
var menu4 = new Menu_1.Menu(4, 'frag', 10);
var menuItem = new Menuitem_1.MenuItem();
menuItem.addFood(menu1, menu2, menu3, menu4);
reterants.addMeunItem(menuItem);
// order
var order1 = new Order_1.Order();
order1.addTable(table1);
order1.addMenuItem(menuItem);
// chef
var meta = new Chef_1.Chef('meta');
var sophal = new Chef_1.Chef('phal');
meta.addOrder(order1);
reterants.people.addChef(meta);
console.log(reterants);
