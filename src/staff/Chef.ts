import { Order } from "../OrderManagerment/Order";

export class Chef{
    private order:Order[]=[]
    constructor(private name:string){}

    addOrder(order:Order){
        this.order.push(order);
    }
}