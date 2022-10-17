"use strict";
this.name = "sdfa";
console.log(this);
console.log(global);
console.log(globalThis);
// setTimeout(function () {
//   console.log("asdf");
// }, 5000);

console.log({ globalThis });
let nnn = "ss";
console.log("+++++++++++++", calculate(2, 2));
function calculate(a, b) {
  let sum = a + b;
  console.log(sum);
  function getSqr() {
    return Math.sqrt(sum);
  }
  return getSqr();
}
// console.log(calculate(2, 2));

console.log("---------------------------------");

for (let index = 0; index < 5; index++) {
  console.log(index);
}
// console.log('-----',index);
