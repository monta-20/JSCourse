/*
  To Understand Ajax, Fetch(Search), Promises

  Call Stack || Stack Trace(Trace de la pile)
  -- JavaScript Engine Uses A Call Stack To Manage Execution Contexts
  -- Mechanism To Make The Interpreter Track Your Calls
  -- When Function Called It Added To The Stack
  -- When Function Executed It Removed From The Stack
  -- After Function Is Finished Executing The Interpreter Continue From The Last Point
  -- Work Using LIFO Principle => Last In First Out
  -- Code Execution Is Synchronous.
  -- Call Stack Detect Web API Methods And Leave It To The Browser To Handle(Gérer-يتعامل) It
  -- Call Stack Before Any Execution Of Browser

  Web API
  -- Methods Available From The Environment => Browser
*/

setTimeout(() => {
    console.log("Web API");
  }, 0);
  
  function one() {
    console.log("One");
  }
  function two() {
    one();
    console.log("Two");
  }
  function three() {
    two();
    console.log("Three");
  }
  
  three();
  
  /*
  =================================
  console.log("One");
  =================================
  function one() {
    console.log("One");
  }
  =================================
  function two() {
    one();
    console.log("Two");
  }
  =================================
  function three() {
    two();
    console.log("Three");
  }
  =================================
  */
  
  console.log("#####");
  console.log("One");
  console.log("Two");
  console.log("Three");