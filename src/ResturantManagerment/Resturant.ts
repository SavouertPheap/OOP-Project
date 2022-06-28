import { Table } from "../Materail/Table";
import { Chef } from "../staff/Chef";
import { HumanManager } from "../staff/HurmanManager";
import { MenuItem } from "./kitchen/Menuitem";


export class Resturant{
    
    // public services
    
    public people:HumanManager = new HumanManager();
    private menuItems:MenuItem[] = [];
  
    constructor(private name:string,private location:string){
    }
    addMeunItem(Menu:MenuItem){
        this.menuItems.push(Menu);
    }
    
}