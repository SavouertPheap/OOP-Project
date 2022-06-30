import { Customer } from "./Customer";
import { Menu } from "./Menu";
import { MenuItem } from "./MenuItem";


export class Order{
    private customers:Customer[]=[]
    menuItem:MenuItem[]=[];
    cusOrderFood: Menu[]=[]


    addMenuItem(...menuItems:MenuItem[]){
        this.menuItem = this.menuItem.concat(menuItems);
    }
    getAllOrder(){
        return this;
    }

    addCustomer(customer:Customer){
        this.customers.push(customer);
    }

    isEqual(customerId:number):boolean{
        let message = false;
        for(let customer of this.customers){
            if(customer.getCustomerId() == customerId){
                message = true
            }
        }
        return message;
    }
    addFoodCusOrder(...cusOrders:Menu[]){
        this.cusOrderFood= this.cusOrderFood.concat(cusOrders)
    }

    getFoodCusOrder(){
        return this.cusOrderFood;
    }
    checkInMenu(cusOrderFood:Menu){
        // return orderagain;
        let ans ="";
        for ( let i=0; i<this.cusOrderFood.length;i++){
           let orderagain = this.cusOrderFood[i]['foodOrder']
           for ( let a=0; a<orderagain.length; a++){
               return ans += orderagain[a]
            }
            
        }
    
    }

    checkMenuItem(MenuItem:MenuItem){
        for( let item of this.menuItem){
            return item.getName();
        }
    }
    isEquals(menu:Menu,menuItem:MenuItem):boolean | undefined{
        return this.checkInMenu(menu) == this.checkMenuItem(menuItem)
    }

    getPriceMenuItem(menuItem:MenuItem){
        let prices = 0;
        return prices += menuItem.getPrice();
    }
    // sumPrice():number{
    //     let sum = this.getPriceMenuItem(men);

    // }
}