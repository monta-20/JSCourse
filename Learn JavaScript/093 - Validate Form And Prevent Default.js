/*
  DOM [Events]
  - Validate Form Practice
  - Prevent Default
*/

let userInput=document.querySelector("[name=username]");
let ageInput=document.querySelector("[name=age]");
console.log(ageInput);
console.log(userInput);

document.forms[0].onsubmit=function(event){
    let userValid = false;
    let ageValid = false ;

    if(userInput.value!=="" && userInput.value.length<=10){
        userValid= true;
    }
    if(ageInput.value!=="" && ageInput.value.length<=2){
        ageValid = true;
    }
    if(userValid===false || ageValid=== false){
        event.preventDefault();//n'est pas passe par le serveur
    }
};


document.links[0].onmouseenter =function(ev){
    console.log(ev);
    ev.preventDefault();
};