/*
  BOM [Browser Object Model]
  Local Storage
  - setItem(Key,Value)
  - getItem(Key)
  - removeItem
  - clear
  - key

  Info
  - No Expiration Time
  - HTTP And HTTPS
  - Private Tab
*/

// Set
window.localStorage.setItem("color","green");
window.localStorage.fontWeight="bold";
window.localStorage['fontSize']="30px";
//Get
console.log(window.localStorage.getItem("color"));
console.log(window.localStorage.fontWeight);
console.log(window.localStorage["fontSize"]);

// Remove One
// window.localStorage.removeItem("fontSize");

// Remove All
// window.localStorage.clear();

// Get Key
console.log(window.localStorage.key(0));

// Set Color In Page
document.body.style.backgroundColor = window.localStorage.getItem("color");

console.log(window.localStorage);
console.log(typeof window.localStorage);




