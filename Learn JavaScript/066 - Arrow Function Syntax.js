/*
  Function
  - Arrow Function
  -- Regular vs Arrow [Param + No Param]
  -- Multiple Lines
*/

let print = function () {
    return 10;
};
console.log(print());
//

let print1 = _ => 10;//let print1 = () => 10;
console.log(print1());
//

let print2 = function (num) {
    return num;
};
console.log(print2(100));
//

let print3 = num => num;//let print3=(num)=>{return num;}
console.log(print3(100));
//
  
let print4 = function (num1, num2) {
    return num1 + num2;
};
console.log(print4(100, 50));
//

let print5 = (num1, num2) => num1 + num2;
  
console.log(print5(100, 50));