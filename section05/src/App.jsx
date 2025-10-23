import "./App.css";
import { useState } from "react";
import Bulb from "./components/Bulb";
import Counter from "./components/Counter";
import Signal from "./components/Signal";
import LoginControl from "./components/LoginControl";
import Box from "./components/Box";
import Register from "./components/Register";
import HookExam from "./components/HookExam";
import Main from "./components/Main";
import Button from "./components/Button";

function App() {
  // state 값이 바뀌면 리렌더링이 이루어짐!
  // const buttonProps = {
  //   // 객체
  //   text: "메일",
  //   color: "red",
  //   a: 1,
  //   b: 2,
  //   c: 3,
  // };
  return (
    <>
      {/* <Bulb /> */}
      {/* <Counter /> */}
      {/* <Signal /> */}
      {/* <LoginControl /> */}
      {/* <Box color="blue" /> */}
      {/* <Register /> */}
      {/* <HookExam /> */}
      {/* <Main /> */}

      {/* <Button {...buttonProps} />
      <Button text={"카페"} />
      <Button text={"블로그"}></Button> */}
    </>
  );
}

export default App;
