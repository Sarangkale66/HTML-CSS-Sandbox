// types:
/* number boolean undefined string symbols*/
/* Any Unknown Never Void*/
/* Enums*/

var a:any=10;
var flag:any;
var str:any;
//enum
enum Direction{
  top="top",
  left="left",
  right="right",
  bottom="bottom"
};
console.log(Direction.left);


enum MousePosition{
  x=0,
  y=0
}
console.log(MousePosition.x);
console.log(MousePosition.y);

//primitive
/*objects, classes, functions, arrays, tuples*/

// function
function Hello(): number{
  return 10;
}

//reference
  var arr:string[]=["10","20","30"];
  arr.push("40");
  arr.push("50");
  arr.push("60");
  console.table(arr);

//tuples-having fix type and fix size
  var arr1:[string,boolean,number]=["sarang",true,10];
  
//Union Type

function abcde(number1:number|string){
  if(typeof number1==='string'){
    number1.toUpperCase();
  }
  else if(typeof number1==='number'){
    number1.toFixed(2);
  }
}

//Intersection Type
  // but we have to study the type before Intersection 

// for example 1:
type Classmates={
  section:string
}
type Student={
  name:string
}

//here we make the intersection of two types
type ClassmatesInStudents=Classmates&Student;

let ans:ClassmatesInStudents={
  name:"sarang",
  section:"a"
}

// for example 2:
type City={
  name:string,
  population:number
}
type Planet={
  name:string,
  cities:number
}

type CitiesInPlanet=City&Planet;
let value:CitiesInPlanet={
  name:"Bhopal",
  population:120000,
  cities:12
}
console.log("hey");

// Type Aliases:
//Primitive type aliases
type sankhya =number;
let naam:sankhya;

//object type aliases
type Human={
  name:string,
  age:number,
  email:string
}

let harsh:Human={
  name:"sarang",
  age:25,
  email:"harsh@123"
}

// another example
type Age=string|number;
let ageofuser:Age=12;
ageofuser="12";


//interfaces 
interface Animal{
  name:"sarang",
  age:12
}

interface Dog extends Animal{
  funct:"Barking"
}

function Shemda(dog:Dog){
  console.log(dog.name);
}

  //interfaces with same names
  interface Cow{
    sounds:string,
    color:string,
  }

  interface Cow{
    name:string, 
  }

  function Lamda(cow:Cow){
   console.log(cow.name);
  }

