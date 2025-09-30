// 1. Spread 연산자
// -> Spread : 흩뿌리다, 펼치다 라는 뜻
// -> 객체나 배열에 저장된 여러개의 값을 개별로 흩뿌려주는 역할

let arr1 = [1, 2, 3]; // 각각 인덱스에 할당함
//let arr2 = [4,5,6]; // 4,5 사이에 arr1 값을 넣고 싶음
//let arr2 = [4, arr1[0], arr1[1], arr1[2], 5, 6]; // 안 좋은 방법
// arr1 값이 궁금하지 않지만 arr2에 넣고 싶어
let arr2 = [4, ...arr1, 5, 6]; // 이게 스프레드 연산자
//console.log(arr2);
// 객체에서도 많이 쓰임
let obj1 = {
  a: 1,
  b: 2,
};

let obj2 = {
  ...obj1,
  c: 3,
  d: 4,
};
//console.log(obj2);

// 함수에서도 가능
function funcA(p1, p2, p3) {
  //console.log(p1, p2, p3);
}

funcA(...arr1);

// 2. Rest 매개변수
// -> Rest는 나머지, 나머지 매개변수

function funcB(one, two, ...rest) {
  //rest뒤에 추가적으로 매개변수 선언X, 항상 맨마지막 위치
  //console.log(rest);
  //funcB(...rest)하면 나머지에 다 할당되고, 위처럼 one = 1
  // rest는 다른 이름도 가능
}

funcB(...arr1);
