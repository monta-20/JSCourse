/*
  Object
  - Intro and What Is Object
  - Testing Window Object
  - Accessing Object
*/

let user={
    //Properties
    theName:"Montassar",
    theAge:21,
    //Methodes
    sayeHello:function(){
        return `Hello ${this.theName}`;
    },
};
console.log(user.theName);
console.log(user.theAge);
console.log(user.sayeHello());