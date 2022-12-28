const fs= require('fs');
const path=require('path');
// // read file =================================================>>>
// //Async operation
// // fs.readFile('./data/test.txt', 'utf8',(err,data)=>{
// //     console.log(err,data);
// //     // const fileContent=data.
// // })
// console.log('file read 1111');
// // sync operation
// try{
//     const fileData=fs.readFileSync('./data/test.txet','utf8');
//     console.log(fileData);
// }catch(err){
//     console.log('error',err)
// }

// console.log('file read 11111');

// append file
//async
// fs.appendFile('./data/test.txt','some data '+Date.now()+'\n',(err)=>{
//     console.log(err);
// })
//sync
console.log(__dirname);
// console.log(__filename);
// fs.appendFileSync('./src/test/text/dummy.txt','some data '+Date.now()+'\n');
console.log(__dirname+'/text/dummy.txt')
const filePath=path.join(__dirname,'..','text','dummy.txt');
console.log(filePath);
// fs.appendFileSync(filePath,'some data '+Date.now()+'\n');