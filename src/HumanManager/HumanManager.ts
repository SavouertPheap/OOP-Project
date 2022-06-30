import { Chef } from "./Chef";
import { Waiter } from "./Waiter";

export class HumanManager{
    chefs:Chef[] = [];
    waiters:Waiter[] = []
    
    addChef(...chefs:Chef[]){
       return  this.chefs = this.chefs.concat(chefs);
    }
    addWaiter(...wainters:Waiter[]){
        return this.waiters = this.waiters.concat(wainters);
    }
    getStaff(){
        return this;
    }

}