/*
  Function
  - Return
  - Automatic Semicolon Insertion [No Line Terminator Allowed]
  - Interrupting
*/

function SayHello(Name){
    return `Hello ${Name}`;
}
SayHello("Montassar");//
console.log(SayHello("Montassar"));//Hello Montassar


function SayHello(Name){
    return `Hello ${Name}`;
    console.log("anyway");//aprés return code n'execute pas alors return comme break mais dans les fonction n'est pas le boucle
}


//Example

function generate(start, end) {
    for (let i = start; i <= end; i++) {
      if (i === 15) {
        return `Interrupting`;//Interrupting c'est un message 
      }
      console.log(i);
    }
  }
  generate(5,20);