import "./App.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { useReducer, useRef, createContext, useEffect, useState } from "react";

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
// 객체가 action action의 data : parsedData
function reducer(state, action) {
  let nextState;

  switch (action.type) {
    case "INIT": {
      return action.data;
    }

    case "CREATE": {
      nextState = [action.data, ...state]; // userReducer의 data(state)가 바뀜
      break;
    } // 하나하나가 item에 담김
    // action.data 리턴
    // 원본 일기 item 리턴
    //return하면 data로 감
    case "UPDATE": {
      nextState = state.map((item) =>
        String(item.id) === String(action.data.id) ? action.data : item
      );
      break;
    }
    case "DELETE": {
      nextState = state.filter((item) => String(item.id) !== String(action.id));
      break;
    }
    default:
      return state;
    // 기존 state 그대로 반환
  }
  localStorage.setItem("diary", JSON.stringify(nextState)); // nextState는 객체타입이니까 json
  return nextState;
  // state(data)값이 바뀜
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
  const [isLoading, setIsLoading] = useState(true);
  const [data, dispatch] = useReducer(reducer, []);
  // data가 state임 상태변화있을때마다 리듀서가 돌아서 state를 바꿈

  const idRef = useRef(0);

  // mockData가 빈배열이라고 치고, localstorage 가지고 올거임 최초 마운트될때한번만
  useEffect(() => {
    const storedData = localStorage.getItem("diary");

    // 없으면
    if (!storedData) {
      setIsLoading(false);
      return; //언디인상태에서 하면 안됨. 언디면 여기서 끝남
    }
    // 있으면
    const parsedData = JSON.parse(storedData);
    // console.log(parsedData); 데이터가 뜸
    // data를 바꿔줘야함. => dispatch

    // 배열이 아니면
    if (!Array.isArray(parsedData)) {
      setIsLoading(false);
      // false - 포이치 배열이 아니라면? 수행 x
      return;
    }
    // 배열이면
    // id ++
    let maxId = 0;
    parsedData.forEach((item) => {
      if (Number(item.id) > Number(maxId)) {
        maxId = Number(item.id);
      }
    });

    idRef.current = maxId + 1;

    dispatch({
      type: "INIT",
      data: parsedData, // 를 가지고 감
    });
    setIsLoading(false); // 리렌더링
  }, []);

  //

  // 지우지 않는 이상 영구적으로 저장
  // localStorage.setItem("test", "hello");
  // localStorage.setItem("person", { name: "차은우" });  [object Object] 객체 형태의 값은 이렇게 저장 x => json을 이용

  // localStorage.setItem("person", JSON.stringify({ name: "차은우" })); // {"name":"차은우"}
  // console.log(localStorage.getItem("test")); // hello
  // console.log(localStorage.getItem("person")); // {"name":"차은우"} 객체 타입처럼 보이지만 객체가 아님 => 형 변환
  // console.log(JSON.parse(localStorage.getItem("person"))); // 문자열 => JSON 객체타입
  // JSON 자바스크립트의 객체를 표시하는 방법
  // JSON.parse(undefined); 얘는 undefined인지 아닌지 확인해라 오류남

  // localStorage.removeItem("test"); 이렇게 지우거나 직접 백스페이스 눌러서 지울 수 있음

  //

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

  if (isLoading) {
    return <div>데이터 로딩중 입니다...</div>;
  }
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
