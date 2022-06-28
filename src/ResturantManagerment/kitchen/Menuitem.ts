import { Menu } from "./Menu";

export class MenuItem{
    addMenu(menu1: Menu) {
        throw new Error("Method not implemented.");
    }
    menu:Menu[]=[];
    addFood(...newmenus:Menu[]){
        this.menu = this.menu.concat(newmenus);
    }
}