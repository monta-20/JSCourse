/*
  Object Meta Data And Descriptor
  - writable
  - enumerable
  - configurable [Cannot Delete Or Reconfigure]
*/

const myObject = {
    a: 1,
    b: 2,
  };
  
  Object.defineProperty(myObject, "c", {//If Don't Make The Features In Value By Default He Is False
    writable: true,//Change The Featuers Add In Object
    enumerable: true,//Can Loop For Featuers He Is Add
    configurable: true,//For Use The Functions As(Comme) Delete 
    value: 3,
  });
  
  myObject.c = 100;
  
  console.log(delete myObject.c);
  
  for (let prop in myObject) {
    console.log(prop, myObject[prop]);
  }
  
  console.log(myObject);