/*
  Challenge 1
*/

let a = 10;
let b = "20";
let c = 80;
console.log(++a);//1 It is Increment
console.log(a++);//=console.log(a);
console.log(++a + +b++ + +c++ - +a++);//console.log((13+20+80-13)=100) b=21,a=14,c=81
console.log(a);//14
console.log(b);//21
console.log(c);//81
console.log(++a + -b + +c++ - -a++ + +a);//console.log((15-21+82+15+15)=106)
console.log(a);//16
console.log(b);//21
console.log(c);//82
console.log(--c + +b + --a * +b++ - +b * a + --a - +true);//100

/*
  [++a] [+]
  [++a]
  - Value:
  - Explain:
  [+]
  - Explain:
*/

/*
  Challenge 2
*/

let d = "-100";
let e = "20";
let f = 30;
let g = true;

// Only Use Variables Value
// Do Not Use Variable Twice

console.log(-d*+e); // 2000
console.log(-d*2-f+g*3); // 173

//Idea 

//++a (add now)
//a++(add after)