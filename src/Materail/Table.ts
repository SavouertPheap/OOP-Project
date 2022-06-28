import { Customer } from "../Customer";



export class Table{
    private customer:Customer[]=[]
    constructor(private tableId:number){}

    customerTable(...newcustomer:Customer[]){
        this.customer=this.customer.concat(newcustomer);
    }
    isEqual(tableId:number):boolean{
        return tableId == this.tableId;
    }
    customerTableSit(){
        if(this.isEqual(this.tableId)){
            return this.customer;
        }
    }
}