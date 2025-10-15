import "./Editor.css";
import { useState, useRef } from "react";
// ref는 리렌더 필요없을때, 혹은 돔요소 조작할 때
const Editor = ({ onCreate }) => {
  // 객체 구조분해 할당

  const [content, setContent] = useState("");
  const contentRef = useRef();

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onSubmit();
    }
  }; // 엔터 치면 등록

  const onSubmit = () => {
    if (content === "") {
      contentRef.current.focus(); // Ref
      return;
    }
    onCreate(content);
    setContent("");
  };

  return (
    <div className="Editor">
      <input
        ref={contentRef} // ref와 input이 연결돼서 돔요소 조작 가능
        value={content}
        onKeyDown={onKeyDown}
        onChange={onChangeContent}
        placeholder="새로운 todo.."
      />
      <button onClick={onSubmit}>add</button>
    </div>
  );
};

export default Editor;
