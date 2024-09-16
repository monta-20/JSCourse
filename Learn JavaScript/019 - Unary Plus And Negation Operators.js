/*
  - + Unary Plus [Return Number If Its Not Number]
  - - Unary Negation [Return Number If Its Not Number + Negates It]
  Tests
  - Normal Number
  - String Number
  - String Negative Number
  - String Text
  - Float
  - Hexadecimal Numeral System => 0xFF
  - null
  - false
  - true
*/
//Unary Plus
console.log(+100);
console.log(+"100");
console.log(+"-100");
console.log(+"Osama");//NaN
console.log(+"15.5");
console.log(+0xff);
console.log(+null);//0
console.log(+false);//0
console.log(+true);//1
//Unary Negation
console.log(-100);
console.log(-"100");
console.log(-"-100");
console.log(-"Osama");//NaN
console.log(-"15.5");
console.log(-0xff);
console.log(-null);//-0
console.log(-false);//-0
console.log(-true);//-1

console.log(Number("100"));