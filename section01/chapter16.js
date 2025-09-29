// 1. 상수 객체
const animal = {
  // const 한번 값을 주면 아래처럼 값을 바꾸는거 안됨
  type: "고양이",
  name: "나비",
  color: "black",
};

// Uncaught TypeError: Assignment to constant variable.
// animal = {
//   a: 1,
// };

// animal이라는 객체의 주소를 바꾼 것이 아니라서 아래는 됨
// 위에는 통째로 바꾸려고 해서 그럼
animal.age = 2; // 추가
animal.name = "코코"; // 수정
delete animal.color; // 제거

//console.log(animal);

// 2. 메서드
// -> 값이 함수인 프로퍼티를 말함

const person = {
  name: "차인우",
  // 아래처럼 함수를 가지는 속성을 '메서드'라고 부름
  //sayHi: function () {
  sayHi() {
    // 이렇게 사용 가능
    console.log("안농!");
  },
};

person.sayHi();
person["sayHi"](); // 이런 경우 많이 못 봄
