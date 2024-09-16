/*
  DOM [Class List]
  - classList
  --- length
  --- contains
  --- item(index)
  --- add
  --- remove
  --- toggle//supprimer ou ajoute
*/

let element = document.getElementById("my-div1");
let variable1 = document.getElementById("my-div1");
let variable2 = document.getElementById("my-div1");

console.log(element.classList);
console.log(typeof element.classList);

console.log(element.classList.contains("three"));
console.log(element.classList.contains("one"));

console.log(element.classList.item(0));

element.onclick=function(){
    variable1.classList.add("three","four");
}

element.onclick=function(){
    variable2.classList.remove("one","two");
}

element.onclick=function(){
    element.classList.toggle("three","four");
}