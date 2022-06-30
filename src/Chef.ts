
import { Gender, Person } from "./Person";
import { Staute } from "./Status";
import { Order } from "./Order";


export class Chef extends Person{
    private order:Order[]=[]
    private staute= Staute.Inprogress;
    constructor(protected name:string,protected gender:Gender){
        super(name,gender);
    }

    addOrder(order:Order){
       this.order.push(order);
    }
    getStatue(){
        return this.staute;
    }
    setStaute(newStatue: Staute){
        return this.staute= newStatue;
    }
   
}