import { useState } from "react";

const Signal = () => {
  const [color, setColor] = useState("red");

  const changeSignal = () => {
    const signals = ["red", "yellow", "green"];
    const next = signals[(signals.indexOf(color) + 1) % signals.length];
    setColor(next);
  };

  // 색상별 텍스트
  const signalText = {
    red: "빨간불",
    yellow: "노란불",
    green: "초록불",
  };

  // 버튼 문구
  const buttonText = {
    red: "다음 신호에 가세요",
    yellow: "정지하세요",
    green: "안전운전",
  };

  return (
    <div
      onClick={changeSignal}
      style={{
        backgroundColor: color,
      }}
    >
      {/* 네모 박스 */}
      <h1>{signalText[color]}</h1>

      {/* 버튼 */}
      <h3>{buttonText[color]}</h3>
    </div>
  );
};

export default Signal;
