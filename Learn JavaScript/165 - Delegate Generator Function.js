/*
  Generators
  - Delegate Generator
*/

function* generateNums() {
    yield 1;
    yield 2;
    yield 3;
  }
  
  function* generateLetters() {
    yield "A";
    yield "B";
    yield "C";
  }
  
  function* generateAll() {
    yield* generateNums();
    yield* generateLetters();
    yield* [4, 5, 6];//yield [4,5,6]:For generator.next() Return Array Not The Value Of This array
  }//*:Return Content Of functions
  
  let generator = generateAll();
  
  console.log(generator.next());
  console.log(generator.next());
  console.log(generator.next());
  console.log(generator.next());
  console.log(generator.next());
  console.log(generator.next());
  console.log(generator.next());
  console.log(generator.next());
  console.log(generator.next());
  console.log(generator.next());

  //console.log(generator.return());//Break