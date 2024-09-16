/*
  Filter
  - Filter Longest Word By Number
*/

// Filter Words More Than 4 Characters
let sentence = "I Love Foood Code Too Playing Much";

let smallWords= sentence.split(" ").filter(function(element){//split("espace") et join("espace")
    return element.length<=4;   
}).join(" ");
console.log(smallWords);

// Ignore Numbers With filtre
let ignoreNumbers = "Elz123er4o";

let ign = ignoreNumbers
  .split("")
  .filter(function (ele) {
    return isNaN(parseInt(ele));
  })
  .join("");

console.log(ign);

// Ignore Numbers With map
let IgnoreNumbers = "Elz123er4o";

let Ign = IgnoreNumbers
  .split("")
  .map(function (ele) {
    return isNaN(parseInt(ele));
  })
  .join("");

console.log(Ign);

// Filter Strings + Multiply
let mix = "A13BS2ZX";

let mixedContent= mix.split("").filter(function(ele){
      return !isNaN(parseInt(ele));
}).map(function(ele){
    return ele*ele;
}).join("");

console.log(mixedContent);
