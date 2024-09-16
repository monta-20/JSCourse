/*
  - Map Data Type//Map=Carte
  Syntax: new Map(Iterable With Key/Value)
  -- Map vs Object
  --1
  ------ Map => Does Not Contain Key By Default
  ------ Object => Has Default Keys
  --2
  ------ Map => Key Can Be Anything [Function, Object, Any Primitive Data Types]
  ------ Object => String Or Symbol
  --
  ------ Map => Ordered By Insertion
  ------ Object => Not 100% Till Now//Till=Jusqu'a
  --
  ------ Map => Get Items By Size
  ------ Object => Need To Do Manually
  --
  ------ Map => Can Be Directly Iterated
  ------ Object => Not Directly And Need To Use Object.keys() And So On
  --
  ------ Map => Better Performance When Add Or Remove Data
  ------ Object => Low Performance When Comparing To Map//Low=Bas
*/

//1
let myobject={};
let myEmptyObject=Object.create(null);//Aucune propriété(console)
let myMap=new Map();

console.log(myobject);
console.log(myEmptyObject);
console.log(myMap);//Aucune propriété (console)

//2

let myNewObject={
    10:"Number",
    "10":"String",
};

console.log(myNewObject["10"]);//String
console.log(myNewObject[10]);//String

let myNewMap=new Map();
myNewMap.set(10,"Number");
myNewMap.set("10","String");
myNewMap.set(true, "Boolean");
myNewMap.set({a: 1, b: 2}, "Object");
myNewMap.set(function doSomething() {}, "Function");


console.log(myNewMap.get(10));//Number
console.log(myNewMap.get("10"));//String

console.log("######");
console.log(myNewObject);//{10: 'String'}
console.log(myNewMap);