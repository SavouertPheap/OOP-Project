import { Customer } from "../HumanManager/Customer";
import { Menu } from "./Menu";
import { MenuItem } from "./MenuItem";


export class Order{
    private customers:Customer[]=[]
    cusOrderFood: Menu[]=[]

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
}