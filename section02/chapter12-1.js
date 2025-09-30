// function orderFood(food) {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (food === "샐러드") {
//         resolve("심심한" + food);
//       } else {
//         reject("food는 샐러드가 아닙니다.");
//       }
//     }, 3000);
//   });
//   return promise;
// }

// function cooldownFood(food) {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const cooldownedFood = `차갑고 ${food}`;
//       resolve(cooldownedFood);
//     }, 2000);
//   });
//   return promise;
// }

// function freezeFood(cooldownedFood) {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const freezedFood = `냉동된 ${cooldownedFood}`;
//       resolve(freezedFood);
//     }, 1000);
//   });
//   return promise;
// }

// const p = orderFood("샐러드");
// p.then((food) => {
//   console.log(food);
//   return cooldownFood(food);
// })
//   .then((cooldownedFood) => {
//     console.log(cooldownedFood);
//     return freezeFood(cooldownedFood);
//   })
//   .then((freezedFood) => {
//     console.log(freezedFood);
//   });

// ================ 선생님이랑 한 것 =======================
function orderFood() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const food = "떡볶이";
      resolve(food);
    }, 3000);
  });
  return promise;
}

function cooldownFood(food) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const cooldownedFood = `식은 ${food}`;
      resolve(cooldownedFood);
    }, 2000);
  });
  return promise;
}

function freezeFood(food) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const freezedFood = `냉동된 ${food}`;
      resolve(freezedFood);
    }, 1000);
  });
  return promise;
}

const p = orderFood();
p.then((food) => {
  console.log(food);
  return cooldownFood(food);
})
  .then((cooldownedFood) => {
    console.log(cooldownedFood);
  })
  .then((freezedFood) => {
    console.log(freezedFood);
  });
