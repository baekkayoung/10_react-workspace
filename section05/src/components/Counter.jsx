import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0); // [0,f] 구조분해 할당

  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
