import { Customer } from "../Customer";

export class Waiter{
    private customer:Customer[]=[]
    constructor(customer:Customer){}

    proviceservice(...customer:Customer[]){
        this.customer=this.customer.concat(customer)
    }
}