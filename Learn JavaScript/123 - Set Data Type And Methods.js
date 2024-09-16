/*- Set Data Type
Syntax: new Set(Iterable)
-- Object To Store Unique Values//store=stocker
-- Cannot Access Elements By Index

Properties:
- size

Methods:
- add
- delete
- clear
- has//boolean value
*/

let myData=[1,1,1,2,3,"A"];
// let myUniqueData=new Set(myData);

let myUniqueData = new Set().add(1).add(1).add(1).add(2).add(3).add("A");

console.log(`Is Set Has => A ${myUniqueData.has("a".toUpperCase())}`);
console.log(myUniqueData.size);


console.log(myData[0]);
console.log(myUniqueData[0]);

myUniqueData.delete(1);
console.log(myUniqueData);
console.log(myUniqueData.delete(4));//false return value boolean


console.log(myData);
myUniqueData.clear();
console.log(myUniqueData);