// setTimeout(function () {
//   console.log("inside setTimeout");
// }, 10000);
// console.log("outside setTimeout");
// setTimeout(function () {
//   console.log("inside setTimeout");
// }, 100);
// console.log("outside setTimeout");
// console.log("outside setTimeout");
// setTimeout(function () {
//   console.log("inside setTimeout 1");
// }, 100);

// new Promise((resolve,reject)=>{
//     // code inside will take some time
//     // resolve: use resolve to tell process got excuted sucessfull
//     // resolve: use resolve to tell process excution get failed
//     resolve('success');
//     reject('reject')

// })

// new Promise((resolve,reject)=>{
//     setTimeout(function () {
//         console.log("inside setTimeout 1");
//         // resolve({message:'it is successfull'})
//         reject({message:'it is unsuccessfull'})
//       }, 5000);
// }).then(res=>{
//     console.log(res);
//     console.log('sdometing')
// }).catch(err=>{
//     console.log({err});
// })
const promise1 = new Promise((resolve, reject) => {
  setTimeout(function () {
    console.log("inside setTimeout 1");
    resolve({ message: "it is successfull_1" });
    // reject({ message: "it is unsuccessfull_1" });
  }, 5000);
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(function () {
    console.log("inside setTimeout 2");
    resolve({ message: "it is successfull_2" });
    // reject({ message: "it is unsuccessfull_2" });
  }, 4000);
});
// promise1
//   .then((res) => {
//     console.log(res);
//     console.log("sdometing");
//   })
//   .catch((err) => {
//     console.log({ err });
//   });
Promise.all([promise1, promise2])
  .then(([res1, res2]) => {
    console.log({ res1, res2 });
  })
  .catch((err) => {
    console.log({ err });
  });
// Promise.allSettled([promise1, promise2]).then(([res1, res2]) => {
//   console.log({ res1, res2 });
// });

// promise1
//   .then((res) => {
//     console.log(res);
//     console.log("sdometing");
//   })
//   .catch((err) => {
//     console.log({ err });
//   });
