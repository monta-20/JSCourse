/*
  JSON
  - JSON.parse => Convert Text Data To JS Object
  - JSON.stringify => Convert JS Object To JSON
  - Parse And Stringify(Analyser et stringifier)
*/

// Get From Server
const myJsonObjectFromServer ='{"Username":"Montassar","Age": 21}';
console.log(typeof myJsonObjectFromServer);
console.log(myJsonObjectFromServer);

// Convert To JS Object
const myJsObject = JSON.parse(myJsonObjectFromServer);
console.log(typeof myJsObject);
console.log(myJsObject);

// Update(Mise à jour) Data
myJsObject["Username"] = "Elzero";
myJsObject["Age"] = 40;

// Send(envoyer) To Server
const myJsonObjectToServer = JSON.stringify(myJsObject);
console.log(typeof myJsonObjectToServer);
console.log(myJsonObjectToServer);