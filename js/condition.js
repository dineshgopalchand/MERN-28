// tranary operator: ?:
var numberVal = 22;
// if(){}
// if (numberVal % 2 == 0) {
//   // statement
//   console.log(numberVal + " is Even number");
// }

// var numberVal = 23;
// if else
// if (numberVal%2==0) {
//     console.log(numberVal + ' is Even number');
// } else {
//     console.log(numberVal + ' is Odd number');
// }

// var numberVal = 23;
// var result = "";
// if (numberVal % 2 == 0) {
//   result = "Even";
// } else {
//   result = "Odd";
// }
// console.log(numberVal + " is " + result + " number");
// console.log(`${numberVal} is ${result} number`);

// // if else if
// var mark = 28;
// var division = "fail";
// if (mark >= 60) {
//   division = "First";
// } else {
//   if (mark >= 45) {
//     division = "Second";
//   } else {
//     if (mark >= 33) {
//       division = "Third";
//     }
//     // else{
//     //     division='fail';
//     // }
//   }
// }
// console.log(`Student Agg. Mark : ${mark}, Division: ${division}`);

// // if elseif
// var mark = 28;
// var division = "fail";
// if (mark >= 60) {
//   division = "First";
// } else if (mark >= 45) {
//   division = "Second";
// } else if (mark >= 33) {
//   division = "Third";
// }

// console.log(`Student Agg. Mark : ${mark}, Division: ${division}`);

// Switch Case
var mark = 68;
var division = "";
switch (true) {
    case mark >= 60:
        division = "First";
        break;
    case mark >=45:
        division = "Second";
        break;
    case mark >=33:
        division = "Third";
        break;
    default:
        division = "fail"
        break;
}

console.log(`Student Agg. Mark : ${mark}, Division: ${division}`);

// switch case
var gift='No Gift';
switch (division) {
    case 'First':
        gift='100 INR' 
        break;
    case 'Second':
        gift='50 INR' 
        break;
    case 'Third':
        gift='10 INR' 
        break;
    default:
        console.log(' Hurrey you are Dam genious');
        break;
}
console.log(` Gift details : ${gift}`);


// assignment (use both if else as well as switch case)
// var today= new Date();
var today= new Date('2022-10-02');
console.log(today);
currentDay=today.getDay();
// 0-> Sunday
// 1-> Monday
// ...
// 6-> Saturday
