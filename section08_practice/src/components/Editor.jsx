import "./Editor.css";
import { useState, useRef } from "react";

const Editor = ({ onCreate }) => {
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
        ref={contentRef}
        value={content}
        onKeyDown={onKeyDown}
        onChange={onChangeContent}
        placeholder="대출 도서명 입력"
      />
      <button onClick={onSubmit}>대출</button>
    </div>
  );
};

export default Editor;
