import { Table } from "./Materail/Table";
import { Customer } from "./Customer";
import { Gender } from "./staff/Gender";
import { Waiter } from "./staff/Waiter";
import { Resturant } from "./ResturantManagerment/Resturant";
import { Menu } from "./ResturantManagerment/kitchen/Menu";
import { MenuItem } from "./ResturantManagerment/kitchen/Menuitem";


// resturant

let reterants = new Resturant('Best-Food','Phnom penh city');

// customer that came in resterant
let sophiem = new Customer('Sophiem',Gender.Female);
let savouert = new Customer('Savouert',Gender.Female);
reterants.people.addCustomer(savouert);


// waiter in resterant 
let phearun = new Waiter(sophiem);
phearun.proviceservice(savouert,sophiem);
reterants.people.addWaiter(phearun);

// table1
let tables = new Table(1);
tables.customerTable(savouert);
let tables2 = new Table(4);
tables2.customerTable(sophiem);
console.log(tables.customerTableSit());



// menu 
 let menu1 = new Menu(1,'pizza',20);
 let menu2 = new Menu(2,'pizza',30);
 let menuItem = new MenuItem();
 menuItem.addMenu(menu1);
 menuItem.addMenu(menu2);
 reterants.addMeunItem(menuItem);

console.log(menuItem);
