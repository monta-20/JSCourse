/*
  Function
  - Rest Parameters
  - Only One Allowed
  - Must Be Last Element
*/

function calc(...numbers){
    console.log(Array.isArray(numbers));//true 
    let somme=0;
    for(let i=0;i<numbers.length;i++){
        somme+=numbers[i];
    }
    return`Final Result Is ${somme}`;
}
console.log(calc(10,20,30,40));