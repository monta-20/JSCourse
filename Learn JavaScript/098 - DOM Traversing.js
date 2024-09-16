/*
  DOM [Traversing]
  - nextSibling
  - previousSibling
  - nextElementSibling
  - previousElementSibling
  - parentElement
*/

let span = document.querySelector(".Two");

console.log(span.nextSibling);//quelque soit text ou element
console.log(span.nextElementSibling);//element

console.log(span.previousSibling);//quelque soit text ou element
console.log(span.previousElementSibling);//element

console.log(span.parentElement);

span.onclick = function () {
    span.parentElement.style.color="red";
  }