

export abstract class  Person {
    constructor(protected name:string,protected gender:Gender ) {
        
    }
}

export enum Gender{
    Male = 'Male',
    Female = 'Female',
}
export enum Staute{
    Already= "Already",
    Inprogress = "InProgress",
    
}