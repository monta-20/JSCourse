/*
  DOM
  - What Is DOM
  - DOM Selectors
  --- Find Element By ID
  --- Find Element By Tag Name
  --- Find Element By Class Name
  --- Find Element By CSS Selectors
  --- Find Element By Collection
*/

let myIdElement = document.getElementById("my-div");//id
console.log(myIdElement);

let myTagElements = document.getElementsByTagName("p");//p or a or span or input or....
console.log(myTagElements);
console.log(myTagElements[0]);

let myClassElement = document.getElementsByClassName("my-span");//class
console.log(myClassElement);

let myQueryElement = document.querySelector(".my-span");//un seul element réntree(.nomClass,#.nomId)
console.log(myQueryElement);

let myQueryAllElement = document.querySelectorAll(".my-span");
console.log(myQueryAllElement);
console.log(myQueryAllElement[1]);


// ------ title
// ------ body
// ------ images
// ------ forms
// ------ links

console.log(document.title);
console.log(document.body);
console.log(document.forms);
console.log(document.forms[0].one.type);
console.log(document.forms[0].one.value);
console.log(document.links[1]);
console.log(document.links[1].href);





