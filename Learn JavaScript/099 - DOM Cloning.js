/*
  DOM [Cloning]
  - cloneNode(Deep)
  - faire un couper sans copier  
*/

let myP = document.querySelector("p").cloneNode(true);//cloneNode(true) copier //false(par defaut) couper
let myDiv = document.querySelector("div");

myP.id = `${myP.id}-clone`;

myDiv.appendChild(myP);