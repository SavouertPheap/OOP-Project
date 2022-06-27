"use strict";
exports.__esModule = true;
var Table_1 = require("./Materail/Table");
var Customer_1 = require("./Customer");
var Gender_1 = require("./staff/Gender");
var Waiter_1 = require("./staff/Waiter");
var Resturant_1 = require("./ResturantManagerment/Resturant");
var Menu_1 = require("./ResturantManagerment/kitchen/Menu");
var Menuitem_1 = require("./ResturantManagerment/kitchen/Menuitem");
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
// table1
var tables = new Table_1.Table(1);
tables.customerTable(savouert);
// menu 
var menu1 = new Menu_1.Menu(1, 'pizza', 20);
var menu2 = new Menu_1.Menu(2, 'pizza', 30);
var menuItem = new Menuitem_1.MenuItem();
menuItem.addMenu(menu1);
menuItem.addMenu(menu2);
reterants.addMeunItem(menuItem);
console.log(menuItem);
