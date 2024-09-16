/*
  DOM [Events]
  - Use Events On HTML
  - Use Events On JS
  --- onclick
  --- oncontextmenu
  --- onmouseenter
  --- onmouseleave

  --- onload
  --- onscroll
  --- onresize

  --- onfocus
  --- onblur
  --- onsubmit
*/

let myBtn1=document.getElementById("btn1");
let myBtn2=document.getElementById("btn2");
let myBtn3=document.getElementById("btn3");
let myBtn4=document.getElementById("btn4");
let myBtn5=document.getElementById("btn5");
let myBtn6=document.getElementById("btn6");

myBtn1.onclick=function(){
    console.log("Clicked");
};
myBtn2.oncontextmenu=function(){
    console.log("Oncontextmenu");
};
myBtn3.onmouseenter=function(){
    console.log("Onmouseenter");
};
myBtn4.onmouseleave=function(){
    console.log("Onmouseleave");
};
