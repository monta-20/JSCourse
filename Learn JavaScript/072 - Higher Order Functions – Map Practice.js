/*
  Map
  - Swap Cases
  - Inverted Numbers
  - Ignore Boolean Value
*/

let swappingCases = "elZERo";
let invertedNumbers = [1, -10, -20, 15, 100, -30];
let ignoreNumbers = "Elz123er4o";

// let sw = swappingCases
//   .split("")//convertir srtring to array
//   .map(function (ele) {
//     // Condition ? True : False
//     return ele === ele.toUpperCase() ? ele.toLowerCase() : ele.toUpperCase();
//   })
//   .join("");//xonvertir array to string

// Arrow Function Version
let sw= swappingCases.split("").map((ele)=>ele===ele.toUpperCase() ? ele.toLowerCase() : ele.toUpperCase()).join("");
console.log(sw);

let inv = invertedNumbers.map(function (ele) {
    return -ele;
});
  
console.log(inv);

let ign = ignoreNumbers
  .split("")
  .map(function (ele) {
    return isNaN(parseInt(ele)) ? ele : "";
  })
  .join("");

console.log(ign);


