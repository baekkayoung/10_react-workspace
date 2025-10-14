import { useState } from "react";

const Input = () => {
  const [text, setText] = useState("");

  const textLengthChange = (e) => {
    setText(e.target.value);
  };
  return (
    <>
      <div>
        <input value={text} onChange={textLengthChange} />
        <div>글자수 : {text.length}</div>
      </div>
    </>
  );
};

export default Input;
