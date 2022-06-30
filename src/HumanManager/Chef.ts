
import { Gender,Staute, Person } from "./Person";
import { Order } from "../OrderManager/OrderManager";


export class Chef extends Person{
    private order:Order[]=[]
    private salary:number = 0;
    private staute= Staute.Inprogress;
    constructor(protected name:string,protected gender:Gender){
        super(name,gender);
    }


    setSalary(salary:number){
        this.salary = salary;
    }
    
    getSalary(){
        return this.salary;
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