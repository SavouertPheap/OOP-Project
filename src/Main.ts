import { Table } from "./Materail/Table";
import { Customer } from "./Customer";
import { Gender } from "./staff/Gender";
import { Waiter } from "./staff/Waiter";
import { Resturant } from "./ResturantManagerment/Resturant";
import { Menu } from "./ResturantManagerment/kitchen/Menu";
import { MenuItem } from "./ResturantManagerment/kitchen/Menuitem";
import { Order } from "./OrderManagerment/Order";
import { Chef } from "./staff/Chef";


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

let mengyi = new Waiter(sophiem);
mengyi.proviceservice(savouert,sophiem)
reterants.people.addWaiter(mengyi);

// table1
let table1 = new Table(1);
let table2 = new Table(2);
table1.customerTable(savouert);
table2.customerTable(sophiem);
console.log(table1.customerTableSit());


// menu 
let menu1 = new Menu(1,'pizza',20);
let menu2 = new Menu(2,'beaf',35);
let menu3 = new Menu(3,'crap',30);
let menu4 = new Menu(4,'frag',10);

let menuItem = new MenuItem();
menuItem.addFood(menu1,menu2,menu3,menu4);
reterants.addMeunItem(menuItem);


// order
let order1 = new Order();
order1.addTable(table1);
order1.addMenuItem(menuItem)

// chef
let meta = new Chef('meta');
let sophal = new Chef('phal');
meta.addOrder(order1);

reterants.people.addChef(meta);

console.log(reterants);
