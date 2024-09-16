/*
  Function Advanced Examples
*/

function sayHello(userName, age) {
    if (age < 20) {
      console.log(`App is Not Suitable For You`);
    } else {
      console.log(`Hello ${userName} Your Age is ${age}`);
    }
  }
  
  sayHello("Osama", 38);
  sayHello("Sayed", 40);
  sayHello("Ali", 18);
  sayHello("Ali");//Hello Ali Your Age is undefined

  
function generateYears(start,end,exclude){
    for(i=start;i<=end;i+=1){
        if(i===exclude){
            continue;
        }
        console.log(i);
    }
}
generateYears(2000,2022,2019);  