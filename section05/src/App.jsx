import "./App.css";
import { useState } from "react";
import Bulb from "./components/Bulb";
import Counter from "./components/Counter";
import Signal from "./components/Signal";
import LoginControl from "./components/LoginControl";
import Box from "./components/Box";
import Register from "./components/Register";
import HookExam from "./components/HookExam";

function App() {
  // state 값이 바뀌면 리렌더링이 이루어짐!

  return (
    <>
      <Bulb />
      <Counter />
      <Signal />
      <LoginControl />
      <Box color="blue" />
      <Register />
      <HookExam />
    </>
  );
}

export default App;
