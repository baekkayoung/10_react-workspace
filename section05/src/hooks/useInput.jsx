import { useState } from "react";

function useInput() {
  const [input, setInput] = useState("");
  // 리액트 훅 (함수형 컴포넌트 안에서만, 근데 지금 일반함수인데?) -> 1번. 이 function을 커스텀 훅으로 변경
  // function getInput -> useInput으로 변경
  const onChange = (e) => {
    setInput(e.target.value);
  };
  return [input, onChange]; // 배열
}

export default useInput;
