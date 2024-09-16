/*
Object
- Create Object With Create Method
*/
//Example1
let user = {
    age: 20,
    doubleAge: function () {
      return user.age * 2;
    },
};
console.log(user);
console.log(user.age);
console.log(user.doubleAge());

let obj1=Object.create({});
obj1.a=100;
console.log(obj1);

let copyobj=Object.create(user);
console.log(copyobj);
console.log(copyobj.age);
console.log(copyobj.doubleAge());
  //Example2
copyobj.age = 50;
console.log(copyobj);
console.log(copyobj.age);
console.log(copyobj.doubleAge());//n'est change car user.age
//Example3
let User = {
    age: 20,
    doubleAge: function () {
      return this.age * 2;
    },
};
let Copyobj=Object.create(User);
Copyobj.age = 50;
console.log(Copyobj);
console.log(Copyobj.age);
console.log(Copyobj.doubleAge());//change car this.age

