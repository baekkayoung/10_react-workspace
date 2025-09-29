// 1. 대입 연산자
let var1 = 1;

// 2. 산술 연산자
let num1 = 3 + 2;
let num2 = 3 - 2;
let num3 = 3 * 2;
let num4 = 3 / 2;
let num5 = 3 & 2;

let num6 = (1 + 2) * 10;
//console.log(num6);

// 3, 복합 대입 연산자
let num7 = 10;
num7 += 20; // num7 = num7 + 20;
num7 -= 20;
num7 *= 20;
num7 /= 20;
num7 %= 20;
//console.log(num7);
// 연산은 속도가 빠르다~

// 4. 증감 연산자
let num8 = 10;
//num8++; // 후위연산자
//console.log(num8);
//console.log(++num8); // 전위연산자
//console.log(num8++); // 후위연산자

// 5. 논리 연산자
let or = true || false;
let and = true && false;
let not = !true;
//console.log(or, and, not);

// 6. 비교 연산자
let comp1 = 1 === 2; // 1  === "1" -> fasle ===는 타입까지 같아야함
let comp2 = 1 !== 2;
//console.log(comp1, comp2);

let comp3 = 2 > 1;
let comp4 = 2 < 1;
//console.log(comp3, comp4);

let comp5 = 2 >= 2;
let comp6 = 2 <= 2;
//console.log(comp5, comp6);
