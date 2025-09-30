//  const promise = new Promise((resolve, reject) => {
//   // 비동기 작업
//   // executor

//   //   setTimeout(() => {
//   //     console.log("안녕!");
//   //     //resolve("안녕");
//   //     reject("왜 실패했는지 이유..."); // 실패한 것처럼 에러가 뜸
//   //   }, 2000);
//   setTimeout(() => {
//     //const num = 10;
//     const num = null;
//     if (typeof num === "number") {
//       resolve(num + 10);
//     } else {
//       reject("num이 숫자가 아닙니다.");
//     }
//   }, 2000);
// });
//console.log(promise);
// setTimeout(() => {
//   console.log(promise);
// }, 3000);

// then 메소드 : promise의 비동기 작업이 성공할때만 작동함
// -> '그 후에' 라는 뜻

// promise
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// promise.catch((error) => {
//   console.log(error);
// });

function add10(num) {
  const promise = new Promise((resolve, reject) => {
    // 비동기 작업
    // executor
    setTimeout(() => {
      if (typeof num === "number") {
        resolve(num + 10);
      } else {
        reject("num이 숫자가 아닙니다.");
      }
    }, 2000);
  });

  return promise;
}

const p = add10(0);
p.then((result) => {
  //콜백함수 매개변수에 결과가 꽂힌다.
  console.log(result);
  const newP = add10(result);
  // result 중복x 현재 해당하는 then()에서만 사용됨
  //   newP.then((result) => {
  //     console.log(result);
  //   });
  // 이거 대신 아래에 .then으로 가능
  return newP; // -> 여기서 값이 20이 되고 새로운 newP가 되고 그거 기준으로 아래의 .then이 newP에 붙는다.
})
  .then((result) => {
    console.log(result);
    return add10(result);
  })
  .then((result) => {
    console.log(result);
  });
// promise는 깊게 파고드는게 아니라 아래로 흐른다고 보면 된다?
