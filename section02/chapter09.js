// 5가지 배열 변형 메소드
// 1. filter
// 기존 배열에서 조건을 만족하는 요소들만 필터링해서 새로운 배열로 반환
let arr1 = [
  { name: "장우석", hobby: "골프" },
  { name: "김이찬", hobby: "롤드컵보기" },
  { name: "최재홍", hobby: "롤드컵보기" },
];

// let lolPeople = arr1.filter((item) => {
//   if (item.hobby === "롤드컵보기") return true;
// });
let lolPeople = arr1.filter((item) => item.hobby === "롤드컵보기");
//console.log(lolPeople);

// 2. map *****************
// 배열의 모든 요소를 순회하면서, 각각 콜백함수를 실행하고 그 결과값들을 모아서 새로운 배열로 반환한다.
let arr2 = [1, 2, 3];
const mapResult1 = arr2.map((item, idx, arr) => {
  //console.log(idx, item);
  return item * 2; // ** 이 지점이 forEach와 다름!
});
//console.log(mapResult1);

let names = arr1.map((item) => item.name); // (item) => item.name => 콜백함수
//console.log(names);

// 3. sort -> 원본 배열에 영향을 끼치는 메소드
// 배열을 사전순으로 정렬하는 메소드
let arr3 = ["b", "a", "c"];
arr3.sort();
// 주의할 점 let arr3 = [10, 3, 5]; -> 숫자는 배열이 잘 안될 수 있음.
// 사전순이 아니라서 콜백함수를 만들어서 비교
// arr3.sort((a,b)=>{
//  if(a > b){ (오름차순 기준, 내림차순은 a < b 로 하면 됨)
//      b가 a앞에 와라
//      return 1;
//   }else if(a < b){
//      a가 b앞에 와라
//      return -1;
//     }else {
//      두 값의 자리를 바꾸지 마라
//      return 0;
//     }
// });
//console.log(arr3);

// 4. toSorted : 가장 최근에 추가된 최신 함수
// sort의 단점이 원본을 변경시킴. 그걸 보완하고자 나온 거
// 정렬된 새로운 배열을 반환하는 메소드 (원본 변경 x)
let arr5 = ["c", "a", "b"];
const sorted = arr5.toSorted();
//console.log(arr5);
//console.log(sorted);

// 5. join
// 배열의 모든 요소를 하닁 문자열로 합쳐서 반환하는 메소드
let arr6 = ["Hi", "I am", "pretty"];
const joined = arr6.join("-");
//console.log(joined);
// 콘솔에 나오는 .는 구분자, 변경하고 싶으면 join("-")안에 이렇게 넣으면 구분자 변경 가능
