/*
  Arrays Methods [Search]
  - indexOf(Search Element, From Index [Opt])
  - lastIndexOf(Search Element, From Index [Opt])
  - includes(valueToFind, fromIndex [Opt]) [ES7]
*/

let myFriends = ["Ahmed", "Mohamed", "Sayed", "Alaa", "Ahmed"];

console.log(myFriends.indexOf("Ahmed"));//0
console.log(myFriends.indexOf("Ahmed",2));//4
console.log(myFriends.indexOf("Gamal"));//-1


console.log(myFriends.lastIndexOf("Ahmed"));//4
console.log(myFriends.lastIndexOf("Sayed",-2));//2
console.log(myFriends.lastIndexOf("Zied"));//-1

console.log(myFriends.includes("Mohamed"));//true
console.log(myFriends.includes("Mahmoud"));//false
console.log(myFriends.includes("Sayed",3));//false
console.log(myFriends.includes("Sayed",1));//true

if (myFriends.lastIndexOf("Osama") === -1) {
    console.log("Not Found");
  }//Not Found