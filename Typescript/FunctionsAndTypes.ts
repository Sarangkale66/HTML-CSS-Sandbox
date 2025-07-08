//Named Function
function abcd():string{
  return "hey";
}
//Anonymous Function
// function():void{

// }
//Arrow function
const ABCDE=():void=>{

}
//Explicit return type
function ABCDEF():string{
  return "hey";
}
//Implicit return type
function ABCDEFG(){

}
//Optional Parameters(?)
function Intro(user:string,age:number,gender?:string):string{
 return "hello ".concat(user);
}

console.log(Intro("sarang",10));

//Default Parameters
function BYDefault(user :string="default parameter"){
}
//Rest Parameters
function names(...names:string[]){
  console.log(names);
} 
names("sarang","rajesh","kale");

function ABCDEFGH(para:HTMLParagraphElement){
  let para2=document.querySelector("p") as HTMLParagraphElement;
}