/*
  Function
  - Default Function Parameters
  - Function Parameters Default [Undefined]
  - Old Strategies [Condition + Logical Or]
  - ES6 Method
*/

function sayHello(username , age = "Unknown") {
    //First Method
    // if (age === undefined) {
    //   age = "Unknown";
    // }
    //Second Method
    // age = age || "Unknown";
    return `Hello ${username} Your Age Is ${age}`;
  }
  
  console.log(sayHello("Montassar"));