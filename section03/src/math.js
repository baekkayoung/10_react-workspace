// math 모듈
export function add(a, b) {
  return a + b;
}

export function sub(a, b) {
  return a - b;
}

export default function multiply(a, b) {
  return a * b;
}

// cjs 방식(전통적)
// module.exports = {
//   add,
//   sub: sub,
// };

// esm 방식
// export { add, sub };
