
import { Customer } from "./HumanManager/Customer";
import { HumanManager } from "./HumanManager/HumanManager";
import { MenuItem } from "./OrderManager/MenuItem";



export class Resturant{
    
    // public services
    
    public people:HumanManager = new HumanManager();
    private menuItems:MenuItem[] = [];
    private customers:Customer[]=[]

  
    constructor(private name:string,private location:string){
    }
    addMeunItem(...Menu:MenuItem[]){
        return this.menuItems = this.menuItems.concat(Menu);
    }

    addCustomer(...customers:Customer[]){
        return this.customers = this.customers.concat(customers);
    }
    
}