/*
  Arrays Methods [Sort]
  - sort(Function [Opt])
  - reverse
*/

let number=[10,-20,-50,45,0,100,25];
console.log(number.sort());//[-20,-50,0,10,100,25,45]

//sorting number {-1,-2,.....,-9,,1,2,....,9}

let string=["Ali","ali","Mohamed","kamel","jihen","chiama","imen","gamal"];
console.log(string.sort());// ['Ali', 'Mohamed', 'ali', 'chiama', 'gamal', 'imen', 'jihen', 'kamel']

//sorting string{A,B,C,.....,Z,a,b,......,z}

let myFriends = [10, "Sayed", "Mohamed", "90", 9000, 100, 20, "10", -20, -10];

console.log(myFriends);
console.log(myFriends.sort());//[-10, -20, 10, '10', 100, 20, '90', 9000, 'Mohamed', 'Sayed']
console.log(myFriends.reverse());//['Sayed', 'Mohamed', 9000, '90', 20, 100, '10', 10, -20, -10]
//inverse the sort

let MyFriends = [10, "Sayed", "Mohamed", "90", 9000, 100, 20, "10", -20, -10];

console.log(MyFriends);// [10, 'Sayed', 'Mohamed', '90', 9000, 100, 20, '10', -20, -10]
console.log(MyFriends.reverse());//[-10, -20, '10', 20, 100, 9000, '90', 'Mohamed', 'Sayed', 10]
//inverse the MyFriends because is not sort function 

