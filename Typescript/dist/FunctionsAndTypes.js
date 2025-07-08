"use strict";
//Named Function
function abcd() {
    return "hey";
}
//Anonymous Function
// function():void{
// }
//Arrow function
const ABCDE = () => {
};
//Explicit return type
function ABCDEF() {
    return "hey";
}
//Implicit return type
function ABCDEFG() {
}
//Optional Parameters(?)
function Intro(user, age, gender) {
    return "hello ".concat(user);
}
console.log(Intro("sarang", 10));
//Default Parameters
function BYDefault(user = "default parameter") {
}
//Rest Parameters
function names(...names) {
    console.log(names);
}
names("sarang", "rajesh", "kale");
function ABCDEFGH(para) {
    let para2 = document.querySelector("p");
}
