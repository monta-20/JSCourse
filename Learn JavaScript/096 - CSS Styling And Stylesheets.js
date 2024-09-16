/*
DOm [CSS]
---style
---cssText
---removeProperty(propertyName) [Inline,Stylesheet]
---setProperty(propertyName , value ,priority)
*/

let element = document.getElementById("my-div");

element.style.color="red";//style.function(css)
element.style.fontWeight="bold";

element.style.cssText="font-weight:bold;  color:green;  opacity:0.9";//plusieurs fonction css

element.style.removeProperty("color");//supprimer
element.style.setProperty("font-size","40px","important");//add

document.styleSheets[0].rules[0].style.removeProperty("line-height");