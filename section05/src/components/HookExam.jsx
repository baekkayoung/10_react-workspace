import { useState } from "react";
import useInput from "../hooks/useInput";

// 3가지 hook 관련된 팁
// 1. 함수 컴포넌트, 커스텀 훅 내부에서만 호출 가능
// const state = useState();
// Hooks can only be called inside of the body of a function component.

// 2. 조건부(if, for ,...)로 호출될 수는 없다.
/* 2. if (true) { 
    // const state = useState();
  }
  for (;;) {
    // const state = useState();
  } */

// 3. 나만의 훅(Custom Hook) 직접 만들 수 있다.

/*function useInput() {
  const [input, setInput] = useState("");
  // 리액트 훅 (함수형 컴포넌트 안에서만, 근데 지금 일반함수인데?) -> 1번. 이 function을 커스텀 훅으로 변경
  // function getInput -> useInput으로 변경
  const onChange = (e) => {
    setInput(e.target.value);
  };
  return [input, onChange]; // 배열
} => 따로 hook을 모아두는 파일로 빼기 */

const HookExam = () => {
  /* const [input, setInput] = useState("");

  const onChange = (e) => {
    setInput(e.target.value);
  }; getInput 으로 */

  const [input, onChange] = useInput();
  const [input2, onChange2] = useInput();

  //   const state = useState(); // state: 객체 구조분의 할당 한 게 아니라 배열 상태
  return (
    <div>
      <input value={input} onChange={onChange} />
      <input value={input2} onChange={onChange2} />
    </div>
  );
};

export default HookExam;
