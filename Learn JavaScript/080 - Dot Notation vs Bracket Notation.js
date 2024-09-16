/*
  Object
  - Dig Deeper
  - Dot Notation vs Bracket Notation
  - Dynamic Property Name
*/

//Example1
let user = {
    theName: "Osama",
    country: "Egypt",
    "Age Of":21,//les variables bqui posséde number au début ou caractére special ou espace
    "1Club":"Club Africain",
};
console.log(user["Age Of"]);//21
console.log(user["1Club"]);//Club Africain
//Example2

let myVar = "country";

let User = {
theName: "Osama",
country: "Egypt",
};

console.log(User.theName);//Osama
console.log(User.country); // user.country//Egypt
console.log(User.myVar); // user.country//undefined
console.log(User[myVar]); // user.country//Egypt