import { useReducer } from "react";

// reducer : 변환기
// => 상태를 실제로 변화시키는 변환기 역할
// state에 0이 들어가있음 action은?
/*function reducer(state, action) {
  console.log(state, action); // state :0 , 객체 타입:increase, date : 1
  if (action.type === "INCREASE") {
    // 증가를 원하면 아래 리턴
    return state + action.date; // return하면 그 값으로 state값이 변경됨!
  } else if (action.type === "DECREASE") {
    return state - action.date;
  }
}*/

function reducer(state, action) {
  switch (action.type) {
    case "INCREASE":
      return state + action.data;
    case "DECREASE":
      return state - action.data;
    default:
      return state;
  }
}

const Exam = () => {
  const [state, dispatch] = useReducer(reducer, 0); // 변환기, 초기값
  // dispatch 상태변화함수 x, 상태요청반환 o : 상태변화가 있어야 한다는 사실을 알리는, 발송하는 함수
  // reducer를 호출해서 간접적으로 바뀌게 함
  // 어떻게 할건지는 함수는 우리가 만들어야 함
  const onClickPlus = () => {
    dispatch({
      // 얘를 소완해서 요청
      type: "INCREASE",
      data: 1,
    });
    // dispatch(인수(꼭 객체형태))어떻게 바꿀지 인수를 적어줘야 함
    // => 어떻게 변화되길 원하는 지
    // 버튼에 연결해서 연결되면 reducer에게 상태변화 요청
  };

  const onClickMinus = () => {
    dispatch({
      type: "DECREASE",
      data: 1,
    });
  };

  return (
    <div>
      <h1>{state}</h1>
      <button onClick={onClickPlus}>+</button>
      <button onClick={onClickMinus}>-</button>
    </div>
  );
};

export default Exam;
