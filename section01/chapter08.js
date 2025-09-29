// 1. null 병합 연산자
// -> 존재하는 값을 추려내는 기능
// -> null, undefined가 아닌 값을 찾아내는 연산자

let var1;
let var2 = 10;
let var3 = 20;

let var4 = var1 ?? var2;
// ?? -> null 병합 연산자 -> var1 vs var2 맞짱 뜨는데 null, undefined는 무조건 짐, 이긴 애가 들어감
let var5 = var1 ?? var3;
let var6 = var2 ?? var3;
// null, undefined 값이 아니면 앞에 있는 값이 나옴 var2가 나옴
// console.log(var6);

//let userName = "차은우";
let userName;
let userNickName = "존잘왕자";

let displayName = userName ?? userNickName;
//console.log(displayName);
// let userName = "차은우"; 일 때는 차은우가 뜸

// 2. typeof 연산자
// -> 값의 타입을 문자열로 반환기능을 하는 연산자

let var7 = 1;
var7 = "hello";
var7 = true;
let t1 = typeof var7; // 이 값의 타입을 정확하게 알려줌
//console.log(t1); // 자바스크립트에서 String은 S가 소문자임 string

// 3. 삼항 연산자 **중요
// -> 항을 3개 사용하는 연산자
// -> 조건식을 이용해서 참, 거짓일 때의 값을 다르게 반환
let var8 = 10;

// 요구사항 : 변수 res에 var8의 값이 짝수 => "짝", 홀수 => "홀"
let res = var8 % 2 === 0 ? "짝" : "홀";
//console.log(res);
