// 1. 콜백함수
function main(value) {
  // 매개변수는 타입을 쓰는거 아님
  //console.log(value);
  //console.log(1);
  //console.log(2);
  value();
  //console.log("end");
}

// function sub() {
//   console.log("I am sub");
// }

// main(1); // value에 1이 꽂힘
//main(sub); // 인자로 전달받은 함수 sub이 콜백 함수
// main이 먼저 호출되고 sub이 뒷전에 실행되는 함수
// main함수에 인자로 전달되고 나서 실행되는 함수 -> 콜백 함수
// console.log(1); console.log(2);는 콜백함수가 있어야 순서대로 실행됨(특징)

// main(function sub() {
//   console.log("I am sub");
// });

main(() => {
  //console.log("I am sub");
});

// 2. 콜백함수의 활용
function repeat(count, callback) {
  for (let idx = 1; idx <= count; idx++) {
    callback(idx);
  }
}

// function repeatDouble(count) {
//   for (let idx = 1; idx <= count; idx++) {
//     console.log(idx * 2);
//   }
// }

// function repeatTriple(count) {
//   for (let idx = 1; idx <= count; idx++) {
//     console.log(idx * 3);
//   }
// }

// repeat(5);
// repeatDouble(5);
// repeatTriple(5);

repeat(5, (idx) => {
  console.log(idx);
});

repeat(5, (idx) => {
  console.log(idx * 2);
});

repeat(5, (idx) => {
  console.log(idx * 3);
});
