let myArr = [0, 1, 4, 3];

console.log(myArr);

//another way of declaring arrays

let myArr2 = new Array(1, 2, 3, 4, 5);

//Array methods

myArr.push(9);
myArr.pop();

myArr.unshift(9); //[ 9, 0, 1, 4, 3 ]
myArr.shift(); //[ 0, 1, 4, 3 ]
console.log(myArr); //[ 0, 1, 4, 3 ]

myArr2.shift();
console.log(myArr2); //[ 2, 3, 4, 5 ]

console.log(myArr.includes(3)); //true

console.log(myArr.indexOf(3)); //3

//++++++++++++++++++++++++++++++++JOIN+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


let newArr = myArr.join();

console.log(myArr); //[ 0, 1, 4, 3 ]
console.log(newArr); //0,1,4,3
console.log(typeof newArr); //string

 //++++++++++++++++++++++++++++++++++++++++SLICE/SPLICE +++++++++++++++++++++++++++++++++++++++++

 