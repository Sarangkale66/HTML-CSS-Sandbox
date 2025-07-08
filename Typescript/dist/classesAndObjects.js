"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Modules_1 = require("./Modules");
class Airpod {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    /**
    *@param {string} name
    */
    set setName(name) {
        this.name = name;
    }
    get getName() {
        return this.name;
    }
    get getprice() {
        return this.price;
    }
}
let p1 = new Airpod("sarang", 10);
p1.setName = "shaani";
console.log(p1.getName);
console.log(p1.getprice);
console.log(Modules_1.PI);
