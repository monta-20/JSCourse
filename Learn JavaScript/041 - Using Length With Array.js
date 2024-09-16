/*
  Array Methods
  - Length
*/

// Index Start From 0 [ 0, 1, 2, 3, 4 ]

let myFriends = ["Ahmed", "Mohamed", "Sayed", "Alaa"];

console.log(myFriends.length);//4

myFriends[myFriends.length]="Gamal";
console.log(myFriends);//(5) ['Ahmed', 'Mohamed', 'Sayed', 'Alaa', 'Gamal']//ajoute a la fin


myFriends[myFriends.length-1]="Ali";
console.log(myFriends);//(5) ['Ahmed', 'Mohamed', 'Sayed', 'Alaa', 'Ali']//change derniére


myFriends[6]="Marwen";
console.log(myFriends);//(7) ['Ahmed', 'Mohamed', 'Sayed', 'Alaa', 'Ali', vide, 'Marwen']//mot vide


myFriends.length=3;
console.log(myFriends);//(3) ['Ahmed', 'Mohamed', 'Sayed']//longueur obligiée list

