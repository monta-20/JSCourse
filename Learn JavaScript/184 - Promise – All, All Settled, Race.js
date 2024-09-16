/*
  Promise
  - All= If All res Return In Array ElseIf Return rej Promise
  - All Settled= Return Result In Array For Any Result
  - Race(Course)= Return First Promise Execute Any res Or rej
*/

const myFirstPromise = new Promise((res, rej) => {
    setTimeout(() => {
      ReadableStreamBYOBRequest("Iam The First Promise");
    }, 5000);
  });
  
  const mySecondPromise = new Promise((res, rej) => {
    setTimeout(() => {
      rej("Iam The Second Promise");
    }, 1000);
  });
  
  const myThirdPromise = new Promise((res, rej) => {
    setTimeout(() => {
      res("Iam The Third Promise");
    }, 2000);
  });
  
  Promise.all([myFirstPromise, mySecondPromise, myThirdPromise]).then(
    (resolvedValues) => console.log(resolvedValues),
    (rejectedValue) => console.log(`Rejected: ${rejectedValue}`)
  );
  
//   Promise.allSettled([myFirstPromise, mySecondPromise, myThirdPromise]).then(
//     (resolvedValues) => console.log(resolvedValues),
//     (rejectedValue) => console.log(`Rejected: ${rejectedValue}`)
//   );
  
//   Promise.race([myFirstPromise, mySecondPromise, myThirdPromise]).then(
//     (resolvedValues) => console.log(resolvedValues),
//     (rejectedValue) => console.log(`Rejected: ${rejectedValue}`)
//   );