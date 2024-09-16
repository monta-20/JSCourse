/*
  - Filter
  --- method creates a new array
  --- with all elements that pass the test implemented by the provided function.

  Syntax filter(callBackFunction(Element, Index, Array) { }, thisArg)
  - Element => The current element being processed in the array.
  - Index => The index of the current element being processed in the array.
  - Array => The Current Array
*/
// Get Friends With Name Starts With A
let friends = ["Ahmed", "Sameh", "Sayed", "Asmaa", "Amgad", "Israa"];

let filterFriends= friends.filter(function(ele){
    return ele.startsWith("A");
});
console.log(filterFriends);

// Get Even Numbers Only
let numbers = [11, 20, 2, 5, 17, 10];

let evenNumbers= numbers.filter(function(ele){
    return ele % 2==0;
});
console.log(evenNumbers);

//Test Map vs Filter

let addMap = numbers.map(function (el) {
  return el + el;
});

console.log(addMap);

let addFilter = numbers.filter(function (el) {
  return el + el;
});

console.log(addFilter);
//filter au return prend condition et retrun le méme valeur si true or supprimer le valeur si false