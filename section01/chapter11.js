// 함수 선언

function greeting() {
  //console.log("안녕하세용!");
} // 함수 선언(호출X)

//console.log("호출 전");
greeting(); // -> 함수 호출
// greeting; -> 안됨
//console.log("호출 후");

// 원래는 function getArea(){} 여기 있었음
// getArea(10,20);// 10, 20 인자
let area1 = getArea(10, 20);
console.log(area1);
let area2 = getArea(30, 20);
let area3 = getArea(120, 200);

// 호이스팅
// -> 끌어올리다 라는 뜻
// 자바스크립트는 유연한 언어라서 아래에 function을 해도 됨
function getArea(width, height) {
  //타입을 쓰지 않고 이름만 쓰기 원칙
  //let width = 10;
  //let height = 20;

  function another() {
    // 중첩함수
    console.log("another");
  }

  another();
  let area = width * height;

  //console.log(area);
  return area; // 반환값
  //console.log("헤헤"); // return하면 꺼지는거라 이전에 수행해야함
}
