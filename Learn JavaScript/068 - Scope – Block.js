/*
  Scope
  - Block Scope [If, Switch, For]
*/
//var
var y=30;
if(true){
    var y=20;
    console.log(`From If Block ${y}`);//From If Block 20
}
console.log(`From Global ${y}`);//From Global 20
//let
var z=40;
if(true){
    let z=10;
    console.log(`From If Block ${z}`);////From If Block 10
}
console.log(`From Global ${z}`);//From Global 40