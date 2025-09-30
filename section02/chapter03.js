// 1. 배열의 구조 분해 할당
let arr = [1, 2, 3]; // 리터럴 문법

// let one = arr[0];
// let two = arr[1];
// let three = arr[2];
let [one, two, three, four = 4] = arr; // four는 undefined, =4하면 4가 들어감
//console.log(one, two, three, four);

// 2. 객체의 구조 분해 할당
let person = {
  name: "차은우",
  age: 27,
  hobby: "얼굴",
};

// let name = person.name;
// let age = person.age;
// let hobby = person.hobby;
let { name, age: myAge, hobby, extra = "hello" } = person; // age를 myAge로 변경가능
//console.log(name, myAge, hobby, extra);

// 3. 객체 구조분해 할당을 이용해서 함수의 매개변수를 받는 방법
const func = ({ name, age, hobby, extra }) => {
  // person.name;
  // person.age;
  // 위처럼 사용 가능하지만 구조 분해 할당 사용하기
  // 위에 func = (person) -> ({name, age, hobby})
  console.log(name, age, hobby, extra);
};

func(person); // person이 객체
