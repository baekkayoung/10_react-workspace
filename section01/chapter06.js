// 1. 묵시적 형 변환
// -> 자바스크립트 엔진이 알아서 형 변환 하는 것

let num = 10;
let str = "20";

const result = num + str;
//console.log(result);
// 문자열은 어떤 타입을 만나더라도 문자열로 만들어버림

// 2. 명시적 형 변환
// -> 프로그래머가 내장함수 등을 이용해서 직접 형 변환을 명시
// -> 문자열 -> 숫자
let str1 = "10";
let strToNum1 = Number(str1);
//console.log(10 + strToNum1);

let str2 = "10개";
// let str2ToNum2 = Number(str2);
// console.log(str2ToNum2);
// 수칙연산을 실패하면 NaN이 뜸

let str2ToNum2 = parseInt(str2);
//console.log(str2ToNum2);
//let str2 = "총10개";
// 문자부터 먼저 나오는 건 parseInt 안됨!

// -> 숫자 -> 문자열
let num1 = 20;
let numToStr1 = String(num1);
console.log(numToStr1 + "입니다");
