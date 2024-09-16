/*
  Number Methods
  - Two Dots To Call A Methods
  - toString()
  - toFixed(Number Chiffre)
  - parseInt(Variable)
  - parseFloat(Variable)
  - isInteger(Variable) [ES6]
  - isNaN(Variable)-->Boolean [ES6]
*/
console.log((100).toString());
console.log((100.10).toString());

console.log(100.555555.toFixed(2));// return string

console.log(Number("100 Osama"));
console.log(+"100 Osama");
console.log(parseInt(120.50))
console.log(parseInt("100 Osama"));
console.log(parseInt("Osama 100 Osama"));
console.log(parseInt("100.500 Osama"));
console.log(parseFloat("100.500 Osama"));

console.log(Number.isInteger("100"));
console.log(Number.isInteger(100.500));
console.log(Number.isInteger(100));


console.log(Number.isNaN("Osama" / 20));
console.log(Number.isNaN(100));