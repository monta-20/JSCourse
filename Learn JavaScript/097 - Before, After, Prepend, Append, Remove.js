/*
  DOM [Deal With Elements]
  - before [Element || String]
  - after [Element || String]
  - append [Element || String]
  - prepend [Element || String]
  - remove
*/

let element=document.getElementById("my-div");
let createdParagraph = document.createElement("p");
let createdH =document.createElement("h1");

element.before("Hello World");//extérieur Div
element.before(createdParagraph);//extérieur Div

element.after("Bye World");//extérieur Div
element.after(createdH);//extérieur Div

element.append(createdParagraph);//intérieur Div
element.prepend(createdH);////intérieur Div

// element.remove(); supprimer element complétement

