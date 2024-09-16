/*
  Destructuring
  - Destructuring Mixed Content
*/

const user = {
    theName: "Osama",
    theAge: 39,
    skills: ["HTML", "CSS", "JavaScript"],
    addresses: {
      tunisia: "Capital",
      ksa: "Riyadh",
    },
  };

const{theName:n,theAge:a,skills:[, ,three],addresses:{tunisia:t}}=user;

console.log(`Your Name Is: ${n}`);
console.log(`Your Age Is: ${a}`);
console.log(`Your Last Skill Is: ${three}`);
console.log(`Your Live In: ${t}`);