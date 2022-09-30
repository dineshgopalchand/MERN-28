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
console.log(COURSE_NAME);


let $number
// variable naming rule
// it can start with _ $ a-z A-Z
// No length limit , but be reasonable
// can contain _$ number character

// variableName // camelcase
// VariableName // pascal or uppercamel case
// variable_name // underscore seperator


let year=2022;
console.log(typeof(year));
console.log(typeof year);

let nameValue='Dinesh';
let nameValue1="Dinesh";
let nameValue2=`Dinesh`;
console.log(typeof(nameValue));
let boolVal= true;// false
console.log(typeof(boolVal));
undefined
null

let someValue;
console.log(typeof(someValue));
let nullVal=null;
console.log(typeof(nullVal));
let arr=[11,2,2,2,2,2,'string value',true];
let arr1=new Array(11,2,2,2,2,2,'string value',true);
console.log(arr.length);
console.log(arr[0]);
console.log(arr[6]);
console.log(arr[3]);
console.log(typeof(arr));

console.log(Array.isArray(arr));
console.log(Array.isArray(nullVal));

// JSON Object
let details={
    name:'sdlc training',
    location:'Marathahalli',
    contact:'+919876543211',
    'trainer name':'Dinesh',
    'trainer-name1':'Dinesh'
}
console.log(details);
console.log(details.name);
console.log(details.location);
console.log(details.contact);
console.log(details.contact);
console.log(details["trainer name"]);
// console.log(typeof(nullVal));






