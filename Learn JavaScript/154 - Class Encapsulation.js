/*
  Encapsulation
  - Class Fields(Des champs) Are Public By Default
  - Guards(Gardes) The Data Against Illegal Access.
  - Helps To Achieve The Targe(Cible) Without Revealing Its Complex Details.
  - Will Reduce(Réduire) Human Errors.
  - Make(Faire, construire) The App More Flexible And Manageable(Maniable).
  - Simplifies The App.
*/

class User {
    // Private Property
    #e;
    constructor(id, username, eSalary) {
      this.i = id;
      this.u = username;
      this.#e = eSalary;//#:Private It's Necessary To Declare First
    }
    getSalary() {
      return parseInt(this.#e);
    }
  }
  
  let userOne = new User(100, "Elzero", "5000 Gneh");
  
  console.log(userOne.u);
//   console.log(userOne.#e);//erreur
  console.log(userOne.getSalary() * 0.3);