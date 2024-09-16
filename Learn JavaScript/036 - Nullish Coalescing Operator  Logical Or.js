/*
  Logical Or ||
  -- Null + Undefined + Any Falsy Value
  Nullish Coalescing Operator ??
  -- Null + Undefined
*/


console.log(Boolean(100));//true
console.log(Boolean(-100));//true
console.log(Boolean(0));//false
console.log(Boolean(""));//false
console.log(Boolean(null));//false

let price=0;
let price1=null;
let price2;//Undefined
let price3="";
let price4=false;
let price5=true;

console.log(`The Price Is ${price || 200} `);//The Price Is 200 
console.log(`The Price Is ${price1 || 200} `);//The Price Is 200 
console.log(`The Price Is ${price2 || 200} `);//The Price Is 200 
console.log(`The Price Is ${price3 || 200} `);//The Price Is 200 
console.log(`The Price Is ${price4 || 200} `);//The Price Is 200 
console.log(`The Price Is ${price5 || 200} `);//The Price Is true


console.log(`The Price Is ${price ?? 200} `);//The Price Is 0 
console.log(`The Price Is ${price1 ?? 200} `);//The Price Is 200 
console.log(`The Price Is ${price2 ?? 200} `);//The Price Is 200 
console.log(`The Price Is ${price3 ?? 200} `);//The Price Is 
console.log(`The Price Is ${price4 ?? 200} `);//The Price Is false
console.log(`The Price Is ${price5 ?? 200} `);//The Price Is true




