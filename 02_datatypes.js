"use strict"; // treat all code as newest version of code

//alert("hello")  we cannot use alert here because it is node not browser

let name = "abc"; //string
let age = 12; //int
let isLogged = true; //boolean
let state; // if we console this value then output will be undefined

// PRIMITIVE DATA TYPES
//number 2 - power53
//bigint
//string  ""
//boolean  true/false
//undefined where value is not assigned yet
//symbol  unique

// console.log(typeof age); //number
// console.log(typeof null); //object
// console.log(typeof undefined); //undefined

/* 
Primitive DataTypes(7) => Number String Boolean Undefined Null BigInt Symbol

Non Primitive DataTypes => Objects Array Function

There are two types of memory storage 
1. Stack (It stores primitive datatype )
2. Heap 

*/

let myName = "Stuti";
let anotherName = myName;
anotherName = "Hello";

// console.log(myName); // Stuti
// console.log(anotherName); // Hello

// It means when we take referance from primitive datatype it gives copy of the referance not original value

let userOne = {
  userName: "Stuti ",
  userEmail: "abc@fg",
};

let userTwo = userOne;

userTwo.userName = "NewName";

console.log(userOne); //{ userName: 'NewName', userEmail: 'abc@fg' }
console.log(userTwo); //{ userName: 'NewName', userEmail: 'abc@fg' }

// so above is a object so it do not give the old value it updated the value and gives us the changed value
