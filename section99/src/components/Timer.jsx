/* 
기본 타이머
import { useEffect, useState } from "react";

const Timer = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // 1초마다 count 증가
    const timer = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    // 언마운트 시 clearInterval로 정리
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
};

export default Timer; */

// 타이머 시작 / 정지 버튼
import { useEffect, useState } from "react";

const Timer = () => {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false); // 타이머 작동 여부

  useEffect(() => {
    let timer;

    if (isRunning) {
      // 타이머가 켜졌을 때만 setInterval 실행
      timer = setInterval(() => {
        setCount((prev) => prev + 1);
      }, 1000);
    }

    // 언마운트되거나 isRunning이 바뀔 때 기존 타이머 정리
    return () => clearInterval(timer);
  }, [isRunning]); // isRunning이 바뀔 때마다 실행

  const toggleTimer = () => {
    setIsRunning((prev) => !prev); // 켜기/끄기 토글
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={toggleTimer}>{isRunning ? "정지" : "시작"}</button>
    </div>
  );
};

export default Timer;
