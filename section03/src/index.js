// const moduleDate = require("./math");
// console.log(moduleDate);  { add: [Function: add], sub: [Function: sub] }
// console.log("안녕 Node js");
// console.log(moduleDate.add(1, 2)); // 3
// console.log(moduleDate.sub(1, 2)); // -1

// 구조분의 할당 중요!
// const { add, sub } = require("./math"); cjs 방식

// import multiply from "./math.js"; // 디폴트로 내보낸 함수는 이렇게 가능
// import { add, sub } from "./math.js"; // 확장자 명시 필수 ! esm 방식
// import mul, { add, sub } from "./math.js"; // 동시에 가능, 이름 부분 가능
// console.log(mul(2, 3)); 6
// console.log(add(1, 2)); 3
// console.log(sub(1, 2)); -1

import randomColor from "randomcolor"; // 라이브러리 확장자 안 적어도 됨

const color = randomColor();
console.log(color);
//  똥 싸러 갔니? 왜 자리에 없어..! 감자 촉감이 좃.네
// 근데 가영아 너 감자..너무 만져서 찐뜩찐뜩한거야?..ㅋ...?
// 언니.... 완전 에바야~~~
