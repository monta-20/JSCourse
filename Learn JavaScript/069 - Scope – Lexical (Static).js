/*
  Scope
  - Lexical Scope

  Search 
  - Execution Context
  - Lexical Environment
*/

function Parent(){
    let a=20;
    function Child(){
        console.log(a);
        function Grand(){
            let b=40;
            console.log(`From Grand ${a}`);
            console.log(`From Grand ${b}`);
        }
        Grand()
    }
    Child();
}
Parent();
// 20
// From Grand 20
//From Grand 40