/*
  DOM [Events Simulation]
  - click
  - focus
  - blur
*/

let one = document.querySelector(".one");
let two = document.querySelector(".two");

window.onload = function(){//window.onload : si actualise page
    two.focus();//check input directiement
};

one.onblur = function(){//si sortie à la input one
    document.links[0].click();
};