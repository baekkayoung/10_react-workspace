// 1. Falsy한 값 (7개) -> false처럼 보이는 값
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n; // 빅인티저 = 특수한 큰 자료형(잘 이용하지 않지만 알아둬라)

// if (!f1) {
//   console.log("falsy");
// }

// 2. Truthy한 값
// -> 7가지 Falsy한 값들 제외한 나머지 모든 값
let t1 = "hello";
let t2 = 123;
let t3 = [];
let t4 = {};
let t5 = () => {};

// if (t5) {
//   console.log("Truthy");
// }

// 3. 활용 사례

function printName(person) {
  //if (person === undefined || person === null) {
  if (!person) {
    console.log("person의 값이 없음");
    return;
  }
  console.log(person.name);
}

// person 자체는 객체를 가지고 있어서 Truthy
//let person = { name: "차은우" };
//let person;
// Uncaught TypeError: Cannot read properties of undefined (reading 'name')
//let person = null;
let person = { name: "차은우" };
printName(person);
