import { Customer } from "./HumanManager/Customer";
import { Menu } from "./OrderManager/Menu";
import { MenuItem } from "./OrderManager/MenuItem";
import { Order } from "./OrderManager/OrderManager";
import { Table } from "./OrderManager/Table";
import { Waiter } from "./HumanManager/Waiter";
import { Gender } from "./HumanManager/Person";
import { Chef } from "./HumanManager/Chef";
import { Resturant } from "./Restaurant";


let customer1 = new Customer(1,'savouert');
let customer2 = new Customer(2,"sopheim");

let table1 = new Table(1);
let table2 = new Table(2);


let order1 = new Order();
order1.addCustomer(customer1);

let waiter1 = new Waiter();
waiter1.CreateOrder(1,1,order1);

let menu1 = new MenuItem(1,'ddd',15);
let menu2 = new MenuItem(2,'dd',15);

let orders = new Menu(['ddd','dd1']);
order1.addFoodCusOrder(orders)

let meta = new Chef('meta',Gender.Female);

let Resturant1 = new Resturant('PNC',"123");
Resturant1.people.addChef(meta);
Resturant1.people.addWaiter(waiter1);
Resturant1.addMeunItem(menu1,menu2);
Resturant1.addCustomer(customer1,customer2)

console.log(Resturant1);
