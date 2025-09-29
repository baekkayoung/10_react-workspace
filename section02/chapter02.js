function returnFalse() {
  console.log("False 함수");
  return undefined;
}

function returnTrue() {
  console.log("True 함수");
  return 10;
}

//console.log(returnTrue() && returnFalse());
//console.log(returnFalse() && returnTrue());

// 단락평가 활용 사례
function printName(person) {
  //   if (!person) {
  //     console.log("person의 값이 없음");
  //     return;
  //   }

  const name = person && person.name; // 비교하는게 아니라 어떤 값을 넣을 건지
  console.log(name || "person의 값이 없음");
}

printName();
// (); -> 인자를 주지 않아서 person이 undefined
// const name(1번 수행) = person (2번 수행) &&라서 앞까지만 보면 false
// consoloe.log (name || ~ 여기서 || 보면 뒤도 봐야함.
printName({ name: "차은우" });
