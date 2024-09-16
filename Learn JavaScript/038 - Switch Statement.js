/*
  Switch Statement
  switch(expression) {
    Case Value 1:
      // Code Block
      break;
    Case Value 2:
      // Code Block
      break;
    Default:
      // Code Block
  }
  - Default Ordering// order croissant
  - Multiple Match
  - ===//si day="1" alors default exécute
*/

let day=1;
switch(day){
    case 0:
        console.log("Saturday");
        break;
    case 1:
        console.log("Sunday");
        break;
    case 2:
    case 3:
        console.log("Monday");
    break;
    default:     
        console.log("Unknown Day");
    break;   
}