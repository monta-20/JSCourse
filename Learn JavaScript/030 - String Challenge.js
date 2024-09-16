/*
  String Challenge
  All Solutions Must Be In One Chain
  You Can Use Concatenate
*/

let a = "Elzero Web School";

// Include This Method In Your Solution [slice, charAt]
 // Zero

// 8 H
console.log(a.charAt(13).toUpperCase().repeat(8)) // HHHHHHHH

// Return Array
 // ["Elzero"]
console.log(a.split(" ",1));
// Use Only "substr" Method + Template Literals In Your Solution
console.log(a.substr(0,7)+a.substr(11,a.length-1)); // Elzero School

// Solution Must Be Dynamic Because String May Changes
; // eLZERO WEB SCHOOl