// 1. Number Type
let num1 = 27;
let num2 = 1.5;
let num3 = -20;

//console.log(num1 + num2);
//console.log(num1 - num2);
//console.log(num1 * num2);
//console.log(num1 / num2);
//console.log(num1 % num2); // 모듈러 연산자

let inf = Infinity; // 양의 무한대
let mInf = -Infinity; // 음의 무한대

let nan = NaN; // Not a Number

// console.log(1 * "hello");
// NaN 뜸, 사칙연산을 잘못하고 있다고 생각하면 됨

// 2. String Type
let myName = "박현아"; // "" or '' , 감싸주지 않으면 변수명으로 취급함
let myLocation = "미추홀구";
let introduce = myName + myLocation;
//console.log(introduce);

// 새로 배우는 것!
//backtick 백틱
let introduceText = `${myName}은 ${myLocation}에 거주합니다.`;
// 기본적으로 "" 같지만 변수를 동적으로 사용할 수 있음
//console.log(introduceText);
// 템플릿 리터럴 문법

// 3. Boolean Type
let isSwitchOn = true; // true를 ""로 묶으면 String타입으로 됨
let isEmpty = false;

// 4. Null Type (아무것도 없다.)
let empty = null;

// 5. Undefined Type
let none; // 아무것도 할당되어 있지 않다.
// null과 다름. null은 null로 할당한거임.
console.log(none);
