import { PI } from "./Modules";

class Airpod implements Airpod{
 name:string;
 price:number;
  constructor(name:string,price:number){
    this.name=name;
    this.price=price;
  }
  /**
  *@param {string} name
  */
  set setName(name:string){
    this.name=name;
  }
  get getName():string{
    return this.name;
  }
  get getprice():number{
    return this.price;
  }
}
let p1=new Airpod("sarang",10);
p1.setName="shaani";
console.log(p1.getName);
console.log(p1.getprice);
console.log(PI);


