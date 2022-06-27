import { Customer } from "../Customer";



export class Table{
    private customer:Customer[]=[]
    constructor(private tableId:number){}

    customerTable(...newcustomer:Customer[]){
        this.customer=this.customer.concat(newcustomer);
    }
}