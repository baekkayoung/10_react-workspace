// 1. 반복문
for (let idx = 1; idx <= 10; idx++) {
  if (idx % 2 === 0) {
    continue; // 아래 진행 x 건너뛰기
  }
  console.log(idx);

  if (idx >= 5) {
    break; // Swicth문이랑 다름. 나와 가장 가까운 반복문을 빠져나옴
  }
}
