/*
  DOM [Add Event Listener]
  - addEventListener(event,function)
  - Use Without On
  - Attach Multiple Events
  - Error Test

  Search
  - Capture & Bubbling JavaScript
  - removeEventListener
*/

 let myP=document.querySelector("p");

// function one(){
//     console.log("Message From OnClick 1");
// }

// function two(){
//     console.log("Message From OnClick 2");
// }
// myP.onclick=one;
// myP.onclick=two;
// //fonctionnee two seulement

// myP.addEventListener("click",function(){
//     console.log("Message From OnClick 1 Event");
// });
// myP.addEventListener("click", one);
// myP.addEventListener("click", two);
//fonctionnee les deux fonctions n'est pas un seul

myP.onclick=function(){
    let newP=myP.cloneNode(true);
    newP.className="clone";
    document.body.appendChild(newP);
};

// let cloned = document.querySelector(".clone"); // Error

// cloned.onclick = function () {
//   console.log("Iam Cloned");
// };//erruer car cloned.onclick n'est pas il faut element.onclick

document.addEventListener("click",function(e){
    if(e.target.className==="clone"){
        console.log("I'am Cloned");
    }
});
