/*
  Prototype
  - Add To Prototype Chain
  - Extend Built In Constructors Features
*/

class User {
    constructor(id, username) {
      this.i = id;
      this.u = username;
    }
    sayHello() {
      return `Hello ${this.u}`;
    }
}
  
  let userOne = new User(100, "Elzero");
  console.log(userOne.u);
  console.log(User.prototype);
  console.log(userOne);

  User.prototype.sayWelcome = function () {
    return `Welcome ${this.u}`;
  };
  console.log(userOne.sayWelcome());

  Object.prototype.love = "Elzero Web School";
  console.log(userOne.love);

  String.prototype.addDotBeforeAndAfter = function (val) {
    return `.${this}.`;
  };
  
  let myString = "Elzero";
  console.log(myString.addDotBeforeAndAfter());
