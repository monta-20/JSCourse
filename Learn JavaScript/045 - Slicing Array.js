/*
  Arrays Methods [Slicing]
  - slice(Start [Opt], End [Opt] Not Including End)
  --- slice() => All Array
  --- If Start Is Undefined => 0
  --- Negative Count From End
  --- If End Is Undefined || > Indexes => Slice To The End Array.length
  --- Return New Array
  - splice(Start [Mand], DeleteCount [Opt] [0 No Remove], The Items To Add [Opt])
  --- If Negative => Start From The End
*/


let myFriends = ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer"];
console.log(myFriends);//(6) ['Ahmed', 'Sayed', 'Ali', 'Osama', 'Gamal', 'Ameer']
console.log(myFriends.slice());//(6) ['Ahmed', 'Sayed', 'Ali', 'Osama', 'Gamal', 'Ameer']
console.log(myFriends.slice(1));//(5) ['Sayed', 'Ali', 'Osama', 'Gamal', 'Ameer']
console.log(myFriends.slice(1,3));//(2) ['Sayed', 'Ali']
console.log(myFriends.slice(-3));//(3) ['Osama', 'Gamal', 'Ameer']
console.log(myFriends.slice(1,-2));//(3) ['Sayed', 'Ali', 'Osama']
console.log(myFriends.slice(-4,-2));// ['Ali', 'Osama']
console.log(myFriends);//Array.js:22 (6) ['Ahmed', 'Sayed', 'Ali', 'Osama', 'Gamal', 'Ameer']

myFriends.splice(0,0,"Sameer","Samara");
// ajout dans 0 car splice(0,..) et non supprimer car splice(,0,)

console.log(myFriends);//(8) ['Sameer', 'Samara', 'Ahmed', 'Sayed', 'Ali', 'Osama', 'Gamal', 'Ameer']

myFriends.splice(1,2,"Sameer","Samara");
console.log(myFriends);//8) ['Sameer', 'Sameer', 'Samara', 'Sayed', 'Ali', 'Osama', 'Gamal', 'Ameer']
