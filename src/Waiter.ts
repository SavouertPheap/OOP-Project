import { Customer } from "./Customer";
import { Order } from "./Order";



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
    // addCustomer(customer:Customer){
    //     this.customers.push(customer);
    // }

    // isEqual(customerId:number):boolean{
    //     let message = false;
    //     for(let customer of this.customers){
    //         if(customer.getCustomerId() == customerId){
    //             message = true
    //         }
    //     }
    //     return message;
    // }

}