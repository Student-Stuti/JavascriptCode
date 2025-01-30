const accountId = 122323;
let accountEmail = "stuti@google.com";
var accountPassword = "123456";
accountCity = "Jaipur";   // it is not suggested to declare a variable like this 
let accountState ;   // if we do not give any value then it will give output undefined

// accountId = 23454  not allowed const value cannot be updated



console.log(accountId);

/*
Do not use var bacause
var is global scope variable
- var can be redeclared and updated
- if two different files have var intialized variables with same name and we 
update the value of variable in any file then it is updated in all the files bacause
it is global scope variable

let is block scope variable 
- let cannot be redeclared but can be updated 

var was used till 2015 after that ES6 (Ecmascript 6) which introduce let and const 
*/


accountEmail = "stuti@gmail.com";
accountPassword = "345678";
accountCity = "Mohali";

console.table([accountEmail, accountPassword, accountCity ,accountState]);

/* 
(index) │      Values       │
├─────────┼───────────────────┤
│    0    │ 'stuti@gmail.com' │
│    1    │     '345678'      │
│    2    │     'Mohali'      │
│    3    │     undefined 
*/


var a = 200;
{
  let a = 400;
}
console.log("a", a);
let b = a;
console.log("b", b);
{
  let b = -400;
  console.log("b", b);
}
console.log(b);