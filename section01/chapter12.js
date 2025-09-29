/// 1. 함수 표현식
function funcA() {
  //console.log("funcA");
}

let varA = funcA; // varA에 funcA를 담음
//console.log(varA);
varA();

// let varB = function funcB() {
let varB = function () {
  // 그래서 안에 funcB를 적지 않음 = 익명함수
  //console.log("funcB");
};

varB(); // funcB는 선언한게 아님
// funcB(); // Uncaught ReferenceError: funcB is not defined

// 2. 화살표 함수
//let varC = () => { // function을 생략
//  return 1;
//};

//let varC = () => 1;
// varC가 값만 반환하기만 한다면 return도 지우고 중괄호도 지울 수 있음

//let varC = (value) => value + 1;
// value = undefined 선언해준 적 없음 그래서 NaN 나옴

let varC = (value) => {
  console.log(value);
  return value + 1;
};

console.log(varC(10)); // 여기 값을 주면 NaN이 아닌 값이 나옴
