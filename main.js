// // const block = () => {
// //   return Promise.resolve().then(() => {
// //     for (let i = 0; (i = 1000000); i++) {}
// //   });
// // };

// // console.log('first');
// // block().then(() => {});
// // console.log('seconsd');

// // const myPromise = new Promise((resolve, reject) => {
// //   if (true) {
// //     resolve('primise resloved');
// //   } else {
// //     reject('promise reject');
// //   }
// // });

// // // console.log(myPromise);
// // // myPromise
// // //   .then((res) => {
// // //     console.log(res), 'response';
// // //   })
// // //   .catch((e) => {
// // //     console.log(e);
// // //   })
// // //   .finally(() => {
// // //     console.log(e);
// // //   });

// // const secondpromise = new Promise((res) => {
// //   setTimeout(() => {
// //     res('second promise');
// //   }, 3000);
// // });

// // secondpromise.then((res) => {
// //   console.log(res);
// //   myPromise.then((res2) => {
// //     console.log(res2);
// //   });
// // });

// // async function main() {
// //   const second = await secondpromise;
// //   console.log(second, 'second');
// //   const first = await myPromise;
// //   console.log(first, 'first');
// // }

// // main();

// // const thirdPromise = Promise.resolve('gela');

// const firstPromise = new Promise((res, rej) => {
//   setInterval(() => {
//     res('first promise');
//   }, 3000);
// });

// const secondpromise = new Promise((res, rej) => {
//   setInterval(() => {
//     res(' promise second');
//   }, 5000);
// });

// Promise.all([firstPromise, secondpromise]).then(([promise1, promise2]) => {
//   console.log(promise1, '1');
//   console.log(promise2, '2');
// });

// Promise.race([firstPromise, secondpromise])
//   .then((res) => {
//     console.log(res, '1');
//   })
//   .catch((e) => {
//     console.log(e);
//   });

// Promise.allSettled([firstPromise, secondpromise])
//   .then((res) => {
//     console.log(res, '1');
//   })
//   .catch((e) => {
//     console.log(e);
//   });

// for (let i = 0; let <= 10; i++) {
//   console.log(i);
// }

const getdata1 = fetch('https:./jonspllaceholer.typicode.com/users');
const getdata2 = fetch('https:./jonspllaceholer.typicode.com/posts');

Promise.all([getdata, getdata2])
  .then(([res1, res2]) => {
    return [res1.json(), res2.json()];
  })
  .then((res) => {
    res.forEach((el) => {
      el.then((res) => {
        console.log(res, 'res');
      });
    });
  });
