/*
  BOM [Browser Object Model]
  - setTimeout(Function, Timeout, Additional Params)
  - clearTimeout(Identifier)
*/

// setTimeout(function () {
//   console.log("Msg");
// }, 3000);

// setTimeout(sayMsg, 3000);

// function sayMsg() {
//   console.log(`Iam Message`);
// }


// setTimeout(HelloMsg,3000,"Montassar",21);
// function HelloMsg(UserName,Age){
//     console.log(`Iam Message For ${UserName} Age Is : ${Age}`);
// }

function sayMsg(user, age) {
    console.log(`Iam Message For ${user} Age Is : ${age}`);}
let counter = setTimeout(sayMsg, 3000, "Montassar", 21);
let btn = document.querySelector("button");
btn.onclick=function(){
    clearTimeout(counter);
}


