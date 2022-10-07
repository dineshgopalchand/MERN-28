// for (let start = 1; start <= 100; start++) {
//   const numVal = start;

//   let count = 0;
//   for (let num = 1; num <= numVal; num++) {
//     if (numVal % num == 0) {
//       count++;
//     }
//   }
//   if (count <= 2) {
//     console.log(`${numVal} is prime number`);
//   }
// }
for (let start = 1,primeCount=1; primeCount <= 100; start++) {
  const numVal = start;

  let count = 0;
  for (let num = 1; num <= numVal; num++) {
    if (numVal % num == 0) {
      count++;
    }
  }
  if (count <= 2) {
   
    console.log(`${primeCount}: ${numVal} is prime number`);
    primeCount++;
  }
}
