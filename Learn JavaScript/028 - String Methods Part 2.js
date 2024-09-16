/*
  String Methods
  - indexOf(Value [Mand], Start [Opt] 0)//return -1 If Not Include 
  - lastIndexOf(Value [Mand], Start [Opt] Length)//return -1 If Not Include 
  - slice(Start [Mand], End [Opt] Not Include End)
  - repeat(Times) [ES6]
  - split(Separator [Opt], Limit [Opt])--> Array
*/
let a="Elzero Web School";

console.log(a.indexOf("Web"));//7
console.log(a.indexOf("Web",8));//-1
console.log(a.indexOf("o"));//5
console.log(a.lastIndexOf("o"));//15

console.log(a.slice(2,6));//zero
console.log(a.slice(-5,-3));//ch

console.log(a.repeat(5));//Elzero Web SchoolElzero Web SchoolElzero Web SchoolElzero Web SchoolElzero Web School

console.log(a.split());//['Elzero Web School']
console.log(a.split(""));//['E', 'l', 'z', 'e', 'r', 'o', ' ', 'W', 'e', 'b', ' ', 'S', 'c', 'h', 'o', 'o', 'l']
console.log(a.split(" "));// ['Elzero', 'Web', 'School']
console.log(a.split(" " , 2));//['Elzero', 'Web']
console.log(a.split("e" , 2));//['Elz', 'ro W']
console.log(a.split("o" , 2));// ['Elzer', ' Web Sch']