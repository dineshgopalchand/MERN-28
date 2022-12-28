const fs= require('fs');
// read file =================================================>>>
//Async operation
// fs.readFile('./data/test.txt', 'utf8',(err,data)=>{
//     console.log(err,data);
//     // const fileContent=data.
// })
console.log('file read 1111');
// sync operation
try{
    const fileData=fs.readFileSync('./data/test.txet','utf8');
    console.log(fileData);
}catch(err){
    console.log('error',err)
}

console.log('file read 11111');