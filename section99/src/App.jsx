import { useState } from "react";
import Input from "./components/input";
import Button from "./components/Button";
import "./App.css";
import Order from "./components/Order";
import Timer from "./components/Timer";

function App() {
  return (
    <>
      <h1>과제 1</h1>
      <Input />
      <h1>과제 2</h1>
      <Button />
      <h1>과제 3</h1>
      <Timer />
      <h1>과제 4</h1>
      <Order />
    </>
  );
}

export default App;
