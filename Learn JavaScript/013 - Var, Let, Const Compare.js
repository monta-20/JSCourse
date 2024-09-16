/*
  Var
  - Redeclare (Yes)
  - Access Before Declare (Undefined)
  - Variable Scope Drama [Added To Window] ()
  - Block Or Scope Function

  Let
  - Redeclare (No => Error)
  - Access Before Declare (Error)
  - Variable Scope Drama ()
  - Block Or Scope Function

  Const
  - Redeclare (No => Error)
  - Access Before Declare (Error)
  - Variable Scope Drama ()
  - Block Or Scope Function
  */

//Var
var one="Mohamed";
console.log(one);
var one="Qacem";
console.log(one);
//Let=const  
// let one="Mohamed";
// console.log(one);
// let one="Qacem";
// console.log(one);//erreur