/*
  Function - Random Argument Challenge
  ====================================
  Create Function showDetails
  Function Accept 3 Parameters [a, b, c]
  Data Types For Info Is
  - String => Name
  - Number => Age
  - Boolean => Status
  Argument Is Random
  Data Is Not Sorted Output Depend On Data Types
  - Use Ternary Conditional Operator
*/



function showDetails(Name,Age,Statuts){
    if(typeof Name=="string" && typeof Age=="number" && typeof Statuts=="boolean"){
        if(Statuts==true){
            console.log(`Hello ${Name}, Your Age Is ${Age}, You Are Avaible For Hire`);
        }else{
            console.log(`Hello ${Name}, Your Age Is ${Age}, You Are Not Avaible For Hire`);
        }
    }
    else if(typeof Name==="number" && typeof Age==="string" && typeof Statuts==="boolean"){
        if(Statuts==true){
            console.log(`Hello ${Age}, Your Age Is ${Name}, You Are Avaible For Hire`);
        }else{
            console.log(`Hello ${Age}, Your Age Is ${Name}, You Are Not Avaible For Hire`);
        }    

    }
    else if(typeof Name==="boolean" && typeof Age==="number" && typeof Statuts==="string"){
        if(Name==true){
            console.log(`Hello ${Statuts}, Your Age Is ${Age}, You Are Avaible For Hire`);
        }else{
            console.log(`Hello ${Statuts}, Your Age Is ${Age}, You Are Not Avaible For Hire`);
        }
    }
    else if(typeof Name==="boolean" && typeof Age==="string" && typeof Statuts==="number"){
        if(Name==true){
            console.log(`Hello ${Age}, Your Age Is ${Statuts}, You Are Avaible For Hire`);
        }else{
            console.log(`Hello ${Age}, Your Age Is ${Statuts}, You Are Not Avaible For Hire`);

        }    
    }    
    
    
}

showDetails("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"