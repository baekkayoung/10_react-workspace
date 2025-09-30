// 1. 배열 순회
let arr = [1, 2, 3];

// 1_1. 배열 인덱스
for (let i = 0; i < arr.length; i++) {
  // 배열은 객체, 객체는 속성을 가짐
  //console.log(arr[i]);
}

// 1_2. for of 반복문
for (let item of arr) {
  //console.log(item); // 인덱스로 접근하는게 아님, 바로 item으로 접근
}

// 2. 객체 순회
let person = {
  name: "차은우",
  age: 27,
  hobby: "얼굴",
};

// 2_1. Object.keys 사용 (keys는 메소드 속성)
// -> 객체에서 key값들만 뽑아서 새로운 배열 반환

let keys = Object.keys(person); // 키값만 뽑아옴

// for (let i = 0; i < keys.length; i++) {
//   console.log(keys[i]);
// }

for (let key of keys) {
  const value = person[key];
  //console.log(key, person[key]);
  //console.log(key, value); // 깔끔하게 사용하기 위해 const value를 사용함
}

// 2_2. Object.values 사용
// -> 객체에서 value값들만 뽑아서 새로운 배열로 반환

let values = Object.values(person);
//console.log(values);
for (let value of values) {
  //console.log(value); // 순차적으로 나옴
}

// 2_3. for in
for (let key in person) {
  const value = person[key];
  console.log(key, value);
}
