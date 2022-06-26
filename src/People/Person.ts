import { Gender } from "./Gender";

export abstract class  Person {
    constructor(protected name:string,protected gender:Gender ) {
        
    }
}