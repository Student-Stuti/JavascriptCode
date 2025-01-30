const mySym = Symbol("key1");

const jsUser = {
  name: "Stuti",
  email: "stuti@gmail.com",
  age: 23,
  [mySym]: "mykey1",
  location: "Kangra",
  isLoggedIn: false,
  lastLoggedin: ["Monday", "Saturday"],
};

// console.log(jsUser.email); //stuti@gmail.com

// console.log(jsUser["email"]); //stuti@gmail.com

// console.log(typeof jsUser.mySym); //undefined

// console.log(jsUser[mySym]); //mykey1




