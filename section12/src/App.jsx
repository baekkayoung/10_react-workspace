import "./App.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { useReducer, useRef, createContext } from "react";

import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import Edit from "./pages/Edit";
import Notfound from "./pages/Notfound";
import Button from "./components/Button";
import Header from "./components/Header";

// import emotion1 from "./assets/emotion1.png";
// import emotion2 from "./assets/emotion2.png";
// import emotion3 from "./assets/emotion3.png";
// import emotion4 from "./assets/emotion4.png";
// import emotion5 from "./assets/emotion5.png";
import { getEmotionImage } from "./util/get-emotion-image";

const mockData = [
  {
    id: 1,
    createdDate: new Date("2025-10-17").getTime(),
    emotionId: 3,
    content: "1번일기내용 ",
  },
  {
    id: 2,
    createdDate: new Date("2025-10-16").getTime(),
    emotionId: 2,
    content: "2번일기내용 ",
  },
  {
    id: 3,
    createdDate: new Date("2025-09-17").getTime(),
    emotionId: 5,
    content: "3번일기내용 ",
  },
];

// 재생성방지
function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state]; // userReducer의 data(state)가 바뀜
    case "UPDATE":
      // 하나하나가 item에 담김
      // action.data 리턴
      // 원본 일기 item 리턴
      return state.map((item) =>
        String(item.id) === String(action.data.id) ? action.data : item
      );
    case "DELETE":
      return state.filter((item) => String(item.id) !== String(action.id));
  }
}

// createContext()는 React에서 전역변수 저장소를 하나 만드는 함수
export const DiaryStateContext = createContext(); // 상태 전용
export const DiaryDispatchContext = createContext(); // 함수 전용

function App() {
  // const nav = useNavigate();

  /*
  const onClickButton = () => {
    nav("/new");
  };*/

  // reducer, []
  const [data, dispatch] = useReducer(reducer, mockData);

  const idRef = useRef(4);

  // 새로운 일기 추가
  const onCreate = (createdDate, emotionId, content) => {
    // 새로운 일기를 받아와서 추가하는 기능
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        createdDate,
        emotionId,
        content,
      },
    }); // action에 꽂힘
  };

  // 기존 일기 수정
  const onUpdate = (id, createdDate, emotionId, content) => {
    dispatch({
      type: "UPDATE",
      data: {
        id,
        createdDate,
        emotionId,
        content,
      },
    });
  };

  // 기존 일기 삭제
  const onDelete = (id) => {
    dispatch({
      type: "DELETE",
      id,
    });
  };

  return (
    <>
      {/* 
      <Header
        title={"Header"}
        leftChild={<Button text={"Left"} />}
        rightchild={<Button text={"right"} />}
      />
      <Button
        text={"123"}
        // type={"DEFAULT"}
        onClick={() => {
          console.log("123번 버튼 클릭!");
        }}
      />
      <Button
        text={"123"}
        type={"POSITIVE"}
        onClick={() => {
          console.log("123번 버튼 클릭!");
        }}
      />
      <Button
        text={"123"}
        type={"NEGATIVE"}
        onClick={() => {
          console.log("123번 버튼 클릭!");
        }}
      />
      */}

      {/* <div> public
        <img src={"/emotion1.png"} alt="" />
        <img src={"/emotion2.png"} alt="" />
        <img src={"/emotion3.png"} alt="" />
        <img src={"/emotion4.png"} alt="" />
        <img src={"/emotion5.png"} alt="" />
      </div> */}

      {/*<div>
        <img src={emotion1} alt="" />
        <img src={emotion2} alt="" />
        <img src={emotion3} alt="" />
        <img src={emotion4} alt="" />
        <img src={emotion5} alt="" />
      </div>*/}

      {/*
      <div>
        <img src={getEmotionImage(1)} />
        <img src={getEmotionImage(2)} />
        <img src={getEmotionImage(3)} />
        <img src={getEmotionImage(4)} />
        <img src={getEmotionImage(5)} />
      </div>
      */}

      {/* <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/new"}>New</Link>
        <Link to={"/diary"}>Diary</Link>
        <a href="/">Home</a> 
      </div>*/}

      {/* <button onClick={onClickButton}>New 페이지로 이동</button> */}

      {/* <button
        onClick={() => {
          onCreate(new Date().getTime(), 1, "안녕");
        }}
      >
        일기 추가 테스트
      </button>

      <button
        onClick={() => {
          onUpdate(1, new Date().getTime(), 3, "수정된 일기입니다");
        }}
      >
        일기 수정 테스트
      </button>

      <button
        onClick={() => {
          onDelete(1);
        }}
      >
        일기 삭제 테스트
      </button> */}

      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider value={{ onCreate, onUpdate, onDelete }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<New />} />
            <Route path="/diary/:id" element={<Diary />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    </>
  );
}

export default App;
