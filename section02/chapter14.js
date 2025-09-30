// async
// 어떤 함수를 비동기 함수로 만들어주는 키워드
// 함수가 프로미스를 반환하도록 변환해주는 키우드
// promise로 자동으로 만들어줘서 편하고 직관적으로 쓸 수 있음
async function getData() {
  //   return {
  //     name: "차은우",
  //     id: "cha123",
  //   };
  // 아래로 써도 콘솔은 똑같이 뜸. async 쓰고 위처럼 쓰면 편하다.
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ name: "차은우", id: "cha123" });
    }, 1500);
  });
}
//console.log(getData());

// await
// async 함수 내부에서만 사용이 가능한 키워드(async랑 같이 써야함)
// 비동기 함수가 다 처리되기를 기다리는 역할
// await를 쓰면 복잡하게 .then을 사용하지 않아도 됨

// function printData() {
//   getData().then((result) => {
//     console.log(result);
//   });
// }

async function printData() {
  const data = await getData();
  // 데이터가 많아서 처리할 때까지 아래 콘솔로그로 안 내려감
  // 순차적으로 데이터를 처리할 때 사용함.
  console.log(data);
}

printData();
