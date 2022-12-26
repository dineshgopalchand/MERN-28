console.log('first js file ');
const numberList=[1,2,34,3,2,2,2,4,2,.21,434,7887];
const sortedData=numberList.sort((a,b)=>a<b?-1:1);
console.log(sortedData)
process.stdout.write(JSON.stringify(sortedData))
numberList.forEach(item=>console.log(item*2))

// console.log(process);
// process.stdin.on('data', data => {
//     console.log(`You typed ${data.toString()}`);
//     process.exit();
//   });