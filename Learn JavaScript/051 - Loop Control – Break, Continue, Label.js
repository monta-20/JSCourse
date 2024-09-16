/*
  Loop Control
  - Break
  - Continue
  - Label
*/

let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor"];

let colors = ["Red", "Green", "Black"];

let Homogéne=["Keyboard",50,14, "Mouse", "Pen", "Pad",20,47, "Monitor"];

// Break
for (let i = 0; i < products.length; i++){
    if(products[i]==="Pen"){
        break;
    }
    console.log(products[i]);
}

console.log("CONTINUE*************");

// Continue
for (let i = 0; i < Homogéne.length; i++){
    if(typeof Homogéne[i]=="number"){
        continue;  
    }
    console.log(Homogéne[i]);
}

console.log("LABEL*************");

// Label
mainLoop: for (let i = 0; i < products.length; i++) {
  console.log(products[i]);
  nestedLoop: for (let j = 0; j < colors.length; j++) {
    console.log(`- ${colors[j]}`);
    if (colors[j] === "Green") {
      break mainLoop;
    }
  }
}