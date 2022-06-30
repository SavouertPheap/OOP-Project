
export class MenuItem{
    constructor(private id:number,private foodName:string,private price:number){}
    
    getPrice(){
        return this.price;
    }
    getName(){
        return this.foodName;
    }
}