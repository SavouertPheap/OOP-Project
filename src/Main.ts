import { Customer } from "./Customer";
import { Menu } from "./Menu";
import { MenuItem } from "./MenuItem";
import { Order } from "./Order";
import { Table } from "./Table";
import { Waiter } from "./Waiter";


let customer1 = new Customer(1,'savouert');
let customer2 = new Customer(2,"sopheim");

// console.log(customer1.getCustomerId());


let table1 = new Table(1);
let table2 = new Table(2);


let order1 = new Order();
//  order1.orderFood(['Pizz',"ddd"]);

let waiter1 = new Waiter();
waiter1.CreateOrder(1,1,order1);


order1.addCustomer(customer1);



let menu1 = new MenuItem(1,'ddd',15);
let menu2 = new MenuItem(2,'dd',15);

order1.addMenuItem(menu1,menu2);
// order1.isMenuEqual(order1)
let orders = new Menu(['ddd','dd1']);
order1.addFoodCusOrder(orders)

// console.log(order1);
// console.log(order1.checkInMenu(orders));
// checkInMenu

// console.log(order1.isEquals(orders,menu1));
console.log(order1.getPriceMenuItem(menu1));



// console.log(waiter1.isEqual(1));/
