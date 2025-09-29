// 1. 객체 생성
let obj1 = new Object(); // 객체 생성자
let obj2 = {}; // 객체 리터럴 (대부분 사용)

// 2. 객체 속성(프로퍼티) 콜론 기준으로 k : v
let person = {
  name: "차은우", // 네임프로퍼티
  age: 27, // 에이지프로퍼티
  hobby: "얼굴", // 허비프로퍼티
  // 마지막 , 안 찍어도 저장할 때 알아서 찍힘.
  // 함수 가능, 자료형 제한 없음, 배열, 객체 됨
  job: "가수",
  extra: {},
  10: 20, // 아무거나 써본 것
  "like cat": true, //속성명에 공백, 특수문자가 있으면 ""으로 감싸줘야함
};

// 3. 객체 프로퍼티를 다루는 방법
// 3_1. 특정 프로퍼티에 접근 (점표기법, 괄호표기법)
let name = person.name; // 차은우 있음
//let name = person.name2; // console에 undefined 뜸
// console.log(name); // 네임변수에 중간줄 무시해도 됨. 타임스크랩트 권고사항
let age = person["age"]; // [age] 안됨
//console.log(age);
let property = "hobby";
let hobby = person[property];
//console.log(hobby);

// 3_2. 새로운 프로퍼티를 추가하는 방법
person.job = "가수";
person["favoriteFood"] = "떡볶이";

//console.log([person]);

// 3_3. 프로퍼티를 수정하는 방법
person.job = "연기자";
person["favoriteFood"] = "초콜릿";

//console.log(person);

// 3_4. 프로퍼티를 삭제하는 방법
delete person.job;
delete person["favoriteFood"];
//console.log(person);

// 3_5. 프로퍼티를 존재 유무를 확인하는 방법 (in 연산자)
let result1 = "name" in person; // person이라는 객체에 name이라는 속성이 있으면 true
let result2 = "cat" in person;
console.log(result2);
