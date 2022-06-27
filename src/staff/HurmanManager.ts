import {Chef} from './Chef';
import {Customer} from '../Customer';
import {Waiter} from './Waiter';

export class HumanManager {
    private chef: Chef[]=[];
    private customer: Customer[]=[];
    private waiter: Waiter[]=[];

    addCustomer(customer: Customer){
        this.customer.push(customer);
    }
    addChef(chef:Chef){
        this.chef.push(chef);
    }
    addWaiter(Waiter:Waiter){
        this.waiter.push(Waiter);
    }


}