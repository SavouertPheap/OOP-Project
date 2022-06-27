import { Table } from "./Materail/Table";
import { Customer } from "./Customer";
import { Gender } from "./staff/Gender";
import { Waiter } from "./staff/Waiter";
import { Resturant } from "./ResturantManagerment/Resturant";
import {HumanManager} from "./staff/HurmanManager";
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

// menu 
 let menu1 = new Menu(1,'pizza',20);
 let menu2 = new MenuItem();
 menu2.addMenu(menu1);
 reterants.addMeunItem(menu2);


console.log(reterants);
