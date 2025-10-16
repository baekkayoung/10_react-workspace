import "./Editor.css";
import { useState, useRef } from "react";

// ref는 리렌더 필요없을때, 혹은 돔요소 조작할 때
const Editor = ({ onCreate }) => {
  // 객체 구조분해 할당

  const [content, setContent] = useState("");
  const contentRef = useRef();

  // input창에 입력한 값을 content로
  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  // 엔터 치면 등록
  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onSubmit();
    }
  };

  const onSubmit = () => {
    if (content === "") {
      contentRef.current.focus(); // Ref
      return;
    }
    onCreate(content); // onCreate에 인자로 전달함
    setContent("");
  };

  return (
    <div className="Editor">
      <input
        ref={contentRef} // ref와 input이 연결돼서 돔요소 조작 가능
        value={content} // input창에 표시
        onKeyDown={onKeyDown} // 엔터키 이벤트
        onChange={onChangeContent} // input 창에 입력한 값이 content로 저장, 글자입력 이벤트
        placeholder="새로운 todo.."
      />
      <button onClick={onSubmit}>add</button>
    </div>
  );
};

export default Editor;
