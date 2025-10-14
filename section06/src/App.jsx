import { useState } from "react";
import "./App.css";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";

function App() {
  const [count, setCount] = useState(0); // viewer한테 줘야하니까 props 문법 사용

  // 이벤트 핸들러를 만들어서 얘만 주면 되니까!
  // value라는 매개변수로 받기. 숫자를 누를때 해당값을 받으려고
  const onClickButton = (value) => {
    setCount(count + value);
  };

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <Viewer count={count} />
      </section>

      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  );
}

export default App;
