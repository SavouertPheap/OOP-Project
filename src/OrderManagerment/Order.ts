import { Table } from "../Materail/Table";
import { MenuItem } from "../ResturantManagerment/kitchen/Menuitem";


export class Order{
    public table: Table[]=[];
    menuItem : MenuItem[]=[]
    addMenuItem(item:MenuItem){
        this.menuItem.push(item);
    }
    addTable(table1:Table){
        this.table.push(table1);
    }
}