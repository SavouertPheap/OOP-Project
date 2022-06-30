
export class Customer{
    constructor(private customerId :number,private name:string){}
    getCustomerId(){
        return this.customerId;
    }
}