/*
  - Map vs WeakMap
  "
    WeakMap Allows Garbage Collector To Do Its Task But Not Map.//Allows=permet
  "
  --
  Map     => Key Can Be Anything
  WeakMap => Key Can Be Object Only
  --
*/

let mapUser={theName:"Montassar"};

let myMap=new Map();

myMap.set("Value",10);

myMap.set(mapUser,"Object Value");

mapUser = null; // Override The Reference

console.log(myMap);//Not Changed

console.log("#".repeat(20));

let wMapUser = { theName: "Elzero" };

let myWeakMap = new WeakMap();

myWeakMap.set(wMapUser, "Object Value");

wMapUser = null; // Override The Reference

console.log(myWeakMap);//Changed To Null