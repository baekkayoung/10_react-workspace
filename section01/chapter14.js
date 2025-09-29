// 스코프
// -> 전역(전체영역) 스코프 / 지역(특정 영역) 스코프
// -> 전역 스코프 : 전체 영역에서 접근 가능
// -> 지역 스코프 : 특정 영역세서만 접근 가능

let a = 1; // 전역 스코프

function funcA() {
  let b = 2; // 지역 스코프
  console.log(a);

  //function funcB() {}
}

funcA();
//console.log(b); //Uncaught ReferenceError: b is not defined

if (true) {
  let c = 1;
}
//console.log(c); //Uncaught ReferenceError: c is not defined

for (let i = 0; i < 10; i++) {
  let d = 1;
  function funcB() {}
}
//console.log(d); //Uncaught ReferenceError: d is not defined
//console.log(i); //Uncaught ReferenceError: i is not defined
//funcB(); //Uncaught ReferenceError: funcB is not defined -> funcA안에 있을 때 함수도 지역스코프

// 예외적으로 반복문에서 지역스코프으로 인식하지 않음
funcB();
// 보통 if문, for문에서 함수를 만들지 않음. 호출안함
