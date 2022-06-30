import { Customer } from "./Customer";
import { Order } from "../OrderManager/OrderManager";



export class Waiter{
    private orders:Order[]=[]
    
    private salary:number = 0;

    setSalary(salary:number){
        this.salary = salary;
    }
    
    getSalary(){
        return this.salary;
    }
    
    CreateOrder(customerId:number,tableId:number,order1:Order){
            this.orders.push(order1);
    }

    getOrder(){
        return this.orders;
    }


}