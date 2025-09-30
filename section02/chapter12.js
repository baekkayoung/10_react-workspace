function add(a, b, callback) {
  setTimeout(() => {
    const sum = a + b;
    //console.log(sum);
    callback(sum);
  }, 3000);
}
// 함수라서 add를 호출해야함
add(1, 2, (value) => {
  //console.log(value);
});
// const sum = a + b를 바깥으로 빼내고 싶어서 위에 콜백함수(value)를 작성함.
// 그래서 위처럼 뺄 수 있음?
// 비동기 결과를 바깥으로 빼내기 위해서 하는 것

// 음식을 주문하는 상황
function orderFood(callback) {
  setTimeout(() => {
    const food = "떡볶이"; // 1 실행
    callback(food); // 2 실행
  }, 3000);
}
// 음식이 나한테 오는 시간이 3초 걸린다.
// 바깥에서도 시저샐러드 부르고 싶음
// orderFood() 안에 콜백을 작성

// 떡볶이가 너무 뜨거워서 음식을 식힌다.
function cooldownFood(food, callback) {
  setTimeout(() => {
    const cooldownedFood = `식은 ${food}`;
    callback(cooldownedFood);
  }, 2000);
}

// 음식이 너무 남아서 얼리자 얼리자~
function freezeFood(food, callback) {
  setTimeout(() => {
    const freezedFood = `냉동된 ${food}`;
    callback(freezedFood);
  }, 1500);
}

// 아래 코드들이 인덴트(들여쓰기: (코드가 콜백함수로 인해)엄청 깊어짐) -> 가독성이 떨어짐 -> 그리 좋은 코드가 아님
// -> '콜백지옥'이라고 부름, 이걸 보완하기 위해 promise가 있음!
orderFood((food) => {
  // 3 실행
  console.log(food);
  cooldownFood(food, (cooldownedFood) => {
    console.log(cooldownedFood);

    freezeFood(cooldownedFood, (freezedFood) => {
      console.log(freezedFood);
    });
  });
});
