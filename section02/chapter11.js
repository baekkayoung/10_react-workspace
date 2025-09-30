console.log(1);
//setTimeout(함수, 일정시간(ms));
// 대표적인 비동기 함수, 일정시간 이후 코드 실행시켜줌
setTimeout(() => {
  console.log(2);
}, 3000);
console.log(3);
// 1,(실행시키고),3,2(3초후 찍힘) P124 참고
