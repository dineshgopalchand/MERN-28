// function functionName(arg1,arg2){
//     // function body
// }
function showLog() {
  console.log("it is from showlog function");
}

showLog();
showLog();
showLog();
showLog();
function randomNumber() {
  return Math.random();
}
console.log(randomNumber());
let res = randomNumber();
console.log(res);
res = randomNumber();
console.log(res);
res = randomNumber();
console.log(res);
res = randomNumber();
console.log(res);
console.log(res);
console.log(res);
console.log(res);

function showFormattedName(name = "No name") {
  const formattedVal = `Entered Name is : ${name.toUpperCase()}`;
  console.log(formattedVal);
  return formattedVal;
}
showFormattedName("dinesh");
const returnVal = showFormattedName();
// console.log(returnVal)
function getPow(num, powVal = 1) {
  return num ** powVal;
}
console.log(getPow(23, 4));
console.log(getPow(23));

const logFunction = function () {
  console.log("it is from logFunction(Ananomous) function");
  return "asdf";
};
logFunction();
console.log(logFunction());

(function () {
  console.log("it is from self invoking  function");
})();

// const arrowFunction = () => {
//   console.log("it is from arrowFunction(Ananomous) function");
// };
const arrowFunction = () =>
  console.log("it is from arrowFunction(Ananomous) function");
arrowFunction();
// const arrowFunctionShowName = (name) =>console.log("it is from arrowFunction(Ananomous) function "+ name);
const arrowFunctionShowName = (name) =>
  console.log("it is from arrowFunction(Ananomous) function " + name);
arrowFunctionShowName("SDLC");

const arrowFunctionShowNameReturn = (name) => {
  // some calc
  return "it is from arrowFunction(Ananomous) function " + name;
};
console.log(arrowFunctionShowNameReturn("Manisha"));

const arrowFunctionShowNameReturn1 = (name) =>
  "it is from arrowFunction(Ananomous) function " + name;
console.log(arrowFunctionShowNameReturn1("khan Sir"));

// const getPower = (num, powVal = 1) => {
//   return num ** powVal;
// };
const getPower = (num, powVal) => num ** powVal;
console.log(getPower(25, 3));

const add = (num1, num2) => num1 + num2;
console.log(add(23, 34));
// const nAdd=(...num)=>{
//   let sum=0;
//   for (let index = 0; index < num.length; index++) {
//    sum+=num[index];
//   }
//   return sum;
// };
const nAdd = (...num) => num.reduce((sum, item) => sum + item);
const getMin = (...num) => num.reduce((min, item) => (min < item ? min : item));

console.log(nAdd(1, 2, 2, 2, 2, 3, 32, 33, 34, 33, 3, 3, 3243, 23, 20));
console.log(getMin(1, 2, 2, -2, 2, 3, 32, 33, 34, 33, 3, 3, 3243, 23, 20));
// console.log([...[1,2,2,2,2,3,32,33,34,33,3,3,3243,23,2],454,33,3]);

Array.from(new Array(100).keys()).filter((num) => num % 2 == 0);

// function calc(manishapow, n1, n2, n3, n4) {
//   return Math.pow(n1 + n2 + n3 + n4, manishapow);
// }

function calc(manishapow, ...num) {
  return Math.pow(
    num.reduce((sum, n) => sum + n),
    manishapow
  );
}
console.log(calc(3, 4, 4, 3, 3,34));
