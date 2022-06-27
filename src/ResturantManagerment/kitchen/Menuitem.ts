import { Menu } from "./Menu";

export class MenuItem{
    menu:Menu[]=[];
    addMenu(menus:Menu){
        this.menu.push(menus);
    }
}