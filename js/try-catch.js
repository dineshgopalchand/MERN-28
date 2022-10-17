// try {
//     consoled.log('some log');
// } catch (error) {
//     // console.log(error);
//     console.log('there is some errr');
// }

// var details = {
//   name: {
//     firstname: "dinesh Gopal",
//     lastname: "Chand",
//   },
//   location: {
//     st: "whitefield",
//     city: "BLR",
//   },
// };
var details = {};

try {
  const formattedfFName = details.name.firstname.toUpperCase();
  console.log(formattedfFName);
  console.log(details);
} catch (er) {
  console.log(er);
  console.log("there is some errr");
}

var name = "dinehs";
console.log(name.toUpperCase());
