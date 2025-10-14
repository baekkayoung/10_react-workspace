import { useState } from "react";

// Bulb 라는 컴포넌트는 부모로부터 light를 받아옴

const Bulb = () => {
  // ({light})없애도 됨
  const [light, setLight] = useState("OFF");
  // let light = "OFF";

  console.log(light);
  return (
    <div>
      {light === "ON" ? (
        <h1 style={{ backgroundColor: "orange" }}>ON</h1>
      ) : (
        <h1 style={{ backgroundColor: "gray" }}>OFF</h1>
      )}

      <button
        onClick={() => {
          setLight(light === "ON" ? "OFF" : "ON");
          // light = light === "ON" ? "OFF" : "ON"; 변수는 바뀌었어도 리렌더링이 안돼서 작동 안됨 => State
        }}
      >
        {light === "ON" ? "끄기" : "켜기"}
      </button>
    </div>
  );
};

export default Bulb;
