// variable

// var -> redecleration and reassignment are allowed
var variableName;
var variableName='value1';
 variableName='value1';
 console.log(variableName);
// console.log(typeof(variableName));
// variableName=1;
// console.log(typeof(variableName));
// variableName=true;
// console.log(typeof(variableName));
// console.log('something');

// let -> redecleration not allowed
// let -> reassignment  allowed
let studentName='Alok';
 studentName='Alok1';
console.log(studentName);


// let -> redecleration and reassignment are not  allowed
const COURSE_NAME='MERN stack';
 COURSE_NAME='MERN stack';
console.log(COURSE_NAME);