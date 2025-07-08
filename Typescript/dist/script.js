"use strict";
// types:
/* number boolean undefined string symbols*/
/* Any Unknown Never Void*/
/* Enums*/
var a = 10;
var flag;
var str;
//enum
var Direction;
(function (Direction) {
    Direction["top"] = "top";
    Direction["left"] = "left";
    Direction["right"] = "right";
    Direction["bottom"] = "bottom";
})(Direction || (Direction = {}));
;
console.log(Direction.left);
var MousePosition;
(function (MousePosition) {
    MousePosition[MousePosition["x"] = 0] = "x";
    MousePosition[MousePosition["y"] = 0] = "y";
})(MousePosition || (MousePosition = {}));
console.log(MousePosition.x);
console.log(MousePosition.y);
//primitive
/*objects, classes, functions, arrays, tuples*/
// function
function Hello() {
    return 10;
}
//reference
var arr = ["10", "20", "30"];
arr.push("40");
arr.push("50");
arr.push("60");
console.table(arr);
//tuples-having fix type and fix size
var arr1 = ["sarang", true, 10];
//Union Type
function abcde(number1) {
    if (typeof number1 === 'string') {
        number1.toUpperCase();
    }
    else if (typeof number1 === 'number') {
        number1.toFixed(2);
    }
}
let ans = {
    name: "sarang",
    section: "a"
};
let value = {
    name: "Bhopal",
    population: 120000,
    cities: 12
};
console.log("hey");
let naam;
let harsh = {
    name: "sarang",
    age: 25,
    email: "harsh@123"
};
let ageofuser = 12;
ageofuser = "12";
function Shemda(dog) {
    console.log(dog.name);
}
function Lamda(cow) {
    console.log(cow.name);
}
