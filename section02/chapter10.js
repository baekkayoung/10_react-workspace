// 1. Date 객체를 생성하는 방법
let date1 = new Date(); // 생성자
//console.log(date1); // 현재시각 나옴

// 특정 원하는 날짜/시간
//let date2 = new Date("2024/12/25/10:10:10"); // -,.,/ 됨
let date2 = new Date(2024 - 1, 12, 24, 23, 59, 55);
//console.log(date2);

// 2. 타임 스탬프 -> 많이 사용함
// 특정 시간이 "1970.01.01 00시 00분 00초(협정세계시 -UTC)"로 부터 몇 ms가 지났지를 의미하는 "숫자값"
let ts1 = date1.getTime();
//console.log(ts1);
let date4 = new Date(ts1); // 타임 스탬프라는 객체가 생긴 것?
//console.log(date1, date4);

// 3. 시간 요소들을 추출하는 방법
let year = date1.getFullYear();
let month = date1.getMonth() + 1;
let date = date1.getDate();
let hour = date1.getHours();
let minute = date1.getMinutes();
let seconds = date1.getSeconds();
//console.log(year, month, date, hour, minute, seconds);
// 자바스크립트의 월은 0부터 나와서 +1 해줘야 원하는 달로 나옴

// 4. 시간 수정하기
date1.setFullYear(2023);
date1.setMonth(2); // 3월
date1.setDate(30);
date1.setHours(23);
date1.setMinutes(59);
date1.setSeconds(59);
//console.log(date1);

// 5. 시간을 여러 포맷으로 출력하기
//console.log(date1.toDateString()); // 요일 월 일 년
//console.log(date1.toLocaleString()); // 년.월.일.오후.시간(컴퓨터시간맞게)
