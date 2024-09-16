/*
  Date And Time

  new Date(timestamp)
  new Date(Date String)
  new Date(Numeric Values)

  Format
  - "Dec 17 2000"
  - "12/17/2000"
  - "2000-12-17" => ISO International Standard
  - "2000 12"
  - "2000"
  - "00"
  - 2000, 8, 17, 2, 12, 0//Month Index
  - 2000, 8, 17
  - "2000-12-17T06:12:00Z"

  Date.parse("String") // Read Date From A String
*/

console.log(Date.parse("Dec 17 2000"));

let date1 = new Date(0);
console.log(date1);

let date2 = new Date(404344800000);
console.log(date2);

let date3 = new Date("12-17-2000");
console.log(date3);

let date4 = new Date("2000-12-17");
console.log(date4);

let date5 = new Date("2000-12");
console.log(date5);

let date6 = new Date("00");
console.log(date6);

let date7 = new Date(2000, 8, 17, 2, 12, 0);
console.log(date7);

let date8 = new Date(2000, 8, 17);
console.log(date8);

let date9 = new Date("2000-12-17T06:12:00Z");
console.log(date8);