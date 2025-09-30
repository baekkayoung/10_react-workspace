// 5가지 요소 순회 및 탐색 메서드
// 1. forEach
// 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메소드
let arr1 = [1, 2, 3]; // 배열의 크기가 3이라서 콜백함수가 3번 돈다.
// forEach가 메인함수 function(){} -> 인자로 콜백함수
arr1.forEach(function (item, idx, arr) {
  //console.log(idx, item * 2);
});

let doubledArr = [];
// forEach는 자바스크립트에서 item을 선물로 주는데 필요하면 쓰는거?
arr1.forEach((item) => {
  doubledArr.push(item * 2);
});
//console.log(doubledArr);

// 2. includes
// 배열에 특정 요소가 있는지 없는지 확인하는 메소드
let arr2 = [1, 2, 3];
let isInclude = arr2.includes(30); // include는 boolean이라서 있으면 true, 없으면 false
//console.log(isInclude);

// 3. indexOf : 기본적으로 얕은 비교로 동작함
// 특정 요소의 인덱스(위치)를 찾아서 반환해주는 메소드
let arr3 = [1, 2, 3];
let index = arr3.indexOf(20); // 있으면 1 없으면 -1
// let arr3 = [2, 2, 3];
// let index = arr3.indexOf(2); -> 0을 출력함
//console.log(index);
// indexOf는 원시타입은 위치를 잘 찾는데 객체타입은 못 찾아서 -1을 내뱉음
// indexOf는 얕은비교로 동작함(리터럴값을 비교함) 그래서 객체는 주소값을 가지기 때문에 쓸 수 없음.

let objectArr = [{ name: "박현아" }, { name: "차은우" }];
//console.log(objectArr.indexOf({ name: "박현아" }));
//console.log(objectArr.findIndex((item) => item.name === "박현아"));

// 4. findIndex : 깊은 비교를 하기 때문에 객체(주소값有) 비교 가능
// 모든 요소를 순회하면서, 콜백함수를 만족(true를 뱉는)하는 그런
// 특정 요소의 인덱스(위치)를 찾아서 반환해주는 메소드
let arr4 = [1, 2, 3];
// const findedIndex = arr4.findIndex((item) => {
//   if (item % 2 !== 0) return true; // js에서는 한줄실행이면 이렇게 써도 됨
// });
const findedIndex = arr4.findIndex((item) => item === 0);
// 이렇게 줄일 수 있음
//console.log(findedIndex);
// 만족하는게 없으면 -1
// indexOf는 조건이 없고 findIndex는 콜백함수를 만족해야하는 조건이 있음.

// 5. find
// 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾는데, 요소를 그대로 반환
let Arr5 = [{ name: "박현아" }, { name: "차은우" }];
const finded = Arr5.find((item) => item.name === "박현아");
console.log(finded);
// findIndex는 요소 그대로 반환하지 않음.
