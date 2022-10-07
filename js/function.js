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
const arrowFunction = () =>console.log("it is from arrowFunction(Ananomous) function");
arrowFunction();
// const arrowFunctionShowName = (name) =>console.log("it is from arrowFunction(Ananomous) function "+ name);
const arrowFunctionShowName = name =>console.log("it is from arrowFunction(Ananomous) function "+ name);
arrowFunctionShowName('SDLC');

const arrowFunctionShowNameReturn = name =>{
    // some calc
    return "it is from arrowFunction(Ananomous) function "+ name;
}
console.log(arrowFunctionShowNameReturn('Manisha'));


const arrowFunctionShowNameReturn1 = name =>"it is from arrowFunction(Ananomous) function "+ name;
console.log(arrowFunctionShowNameReturn1('khan Sir'));


// const getPower = (num, powVal = 1) => {
//   return num ** powVal;
// };
const getPower = (num, powVal) =>  num ** powVal;
console.log(getPower(25,3));
