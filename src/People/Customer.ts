import { Gender } from "./Gender";
import { Person } from "./Person";

export class Customer extends Person{
    constructor (name:string,gender:Gender){
        super(name,gender);
    } 
}
