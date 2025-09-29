// 1. 변수
let age; // age라는 박스를 만들었지만 정의되지 않았다고 뜸
// console.log(age);

age = 30;
// console.log(age);

// let age = 40;
// let 특징 : 중복선언이 불가

// 2. 상수
const birth = "2005.09.29";
// birth = "123";
// 상수는 바꿀 수 없다. (chapter04.js:13 Uncaught TypeError: Assignment to constant variable.)

// 3. 변수 명명규칙(네이밍 규칙)
// 3_1. $,_ 제외한 기호는 사용할 수 없다.
let $_name;

// 3_2. 숫자로 시작할 수 없다.
let name1;
// let 1name; 안됨
let $2name; // 이건 가능

// 3_3. 예약어를 사용할 수 없다.
// let if;

// 4. 변수 명명 가이드
let salesCount = 1;
let refundCount = 1;
let total = salesCount - refundCount;
// let a = 1; let b = 1; let c = a - b; << 이런 식으로 ㄴㄴ
