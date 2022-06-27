import { Gender } from "./staff/Gender";
import { Person } from "./staff/Person";

export class Customer extends Person{
    [x: string]: any;
    constructor (name:string,gender:Gender){
        super(name,gender);
    } 
}
