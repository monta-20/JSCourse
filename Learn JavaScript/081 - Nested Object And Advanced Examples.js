/*
  Object
  - Nested Object And Trainings
*/

let User={
    Name:"Montassar",
    Age:21,
    Skills:["HTML","CSS","JS"],
    Available:true,
    Addresses:{
        Marroc:"Casablanca",
        Tunisie:{
            One:"Nabeul", Two:"Manouba"
        },
    },
    chechAv:function(){
        if(User.Available===true){
            return "Free For Work";    
        }else{
            return "Not"
        }
    },
};
console.log(User.Skills);
console.log(User.Skills.join(" "));
console.log(User.Skills[2]); // Access With Index
console.log(User.Addresses.Marroc);
console.log(User.Addresses.Tunisie.One);
console.log(User["Addresses"]);
console.log(User["Addresses"]["Tunisie"]);
console.log(User["Addresses"]["Tunisie"]["Two"]);
console.log(User.chechAv());

