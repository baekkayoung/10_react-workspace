import "./Editor.css";
import { useState, useRef, useContext } from "react";
// import { TodoContext } from "../App"; // 만들어지는걸 쓰는거니까 useContext. 가지고 오려면 TodoContext가 export가 되어있어야함
// export 후 import함
import { TodoDispatchContext } from "../App";

const Editor = () => {
  // const { onCreate } = useContext(TodoContext); // 인수로 넘김 TodoCOntext사용할거야! app.jsx에 있는거. 그래서 export함
  const { onCreate } = useContext(TodoDispatchContext); // 인수로 넘김 TodoCOntext사용할거야! app.jsx에 있는거. 그래서 export함
  // const { data } = useContext(TodoContext);
  // console.log(data); 함수들, todos객체를 객체로! 담아져서옴
  // 쓰려면 .. export
  // onCreate만 필요하니까 구조분해할당을 통해서 onCreate만 받아서 사용하면 됨

  const [content, setContent] = useState("");
  const contentRef = useRef();

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
