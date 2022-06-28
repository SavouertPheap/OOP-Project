import { Customer } from "../Customer";



export class Table{
    push(table1: Table) {
        throw new Error("Method not implemented.");
    }
    private customer:Customer[]=[]
    constructor(private tableId:number){}

    customerTable(...newcustomer:Customer[]){
        this.customer=this.customer.concat(newcustomer);
    }
}