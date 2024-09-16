/*
  Destructuring
  - Destructuring Array Advanced Examples
*/

let myFriends = ["Ahmed", "Sayed", "Ali", ["Shady", "Amr", ["Mohamed", "Gamal"]]];

// console.log(myFriends[3][2][1]);

let [, , , [a, , [, b]]] = myFriends;

console.log(a); // Shady
console.log(b); // Gamal

let[, , ,[,c,[d,]]] =myFriends;

console.log(c); //Amr
console.log(d); //Mohamed