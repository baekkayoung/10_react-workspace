import { useRef } from "react";

const Button = () => {
  const countRef = useRef(0);

  const clickButton = () => {
    countRef.current += 1;
    console.log(`버튼을 ${countRef.current}번 눌렀습니다.`);
    console.log(countRef.current);
  };
  return (
    <div>
      <button onClick={clickButton}>횟수 증가</button>
    </div>
  );
};
export default Button;
