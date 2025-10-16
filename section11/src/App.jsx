import "./App.css";
import Editor from "./components/Editor";
import Header from "./components/Header";
import List from "./components/List";
import Exam from "./components/Exam";

import {
  useState,
  useRef,
  useReducer,
  useCallback,
  createContext,
  useMemo,
  memo,
} from "react";

// 함수니까 const아닌 function
function reducer(state, action) {
  // action에 dispatch의 객체가 꽂힘
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "UPDATE":
      return state.map((item) =>
        item.id === action.targetId ? { ...item, isDone: !item.isDone } : item
      );
    case "DELETE":
      return state.filter((item) => item.id !== action.targetId);
    default:
      return state;
  }
}

export const TodoStateContext = createContext(); //자주바뀌는거
export const TodoDispatchContext = createContext(); // 자주 안바뀌는 거

//*********** */
export const TodoContext = createContext(); // TodoContext는 사실 컴포넌트안에 써도되는데 밖에 뺌 계속 렌더링될필요 x
// console.log(TodoContext); // Provider가 뭐임?

function App() {
  const mockDate = [
    {
      id: 0,
      isDone: false,
      content: "React 공부하기",
      date: new Date().getTime(),
    },
    {
      id: 1,
      isDone: false,
      content: "React 복습하기",
      date: new Date().getTime(),
    },
    {
      id: 2,
      isDone: false,
      content: "React 예습하기",
      date: new Date().getTime(), // 오늘의 날짜 기준으로 타임스템프
    },
  ];

  const [todos, dispatch] = useReducer(reducer, mockDate); // reducer랑 연결, 초기데이터 mockData
  const idRef = useRef(3);

  /*
  const onCreate = (content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        isDone: false,
        content: content,
        date: new Date().getTime(),
      },
    });
  };*/

  const onCreate = useCallback((content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        isDone: false,
        content: content,
        date: new Date().getTime(),
      },
    });
  }, []);

  /*
  const onUpdate = (targetId) => {
    dispatch({
      type: "UPDATE",
      targetId: targetId,
    });
  };*/

  const onUpdate = useCallback((targetId) => {
    dispatch({
      type: "UPDATE",
      targetId: targetId,
    });
  }, []);

  /*
  const onDelete = (targetId) => {
    dispatch({
      type: "DELETE",
      targetId: targetId,
    });
  };*/

  // useCallBack 함수 : 콜백함수를 뱉어냄
  const onDelete = useCallback((targetId) => {
    dispatch({
      type: "DELETE",
      targetId: targetId,
    });
  }, []); // 최초 마운트 될 때만 생성됨

  const memoizedDispatch = useMemo(() => {
    return { onCreate, onUpdate, onDelete }; // momeizedDispath에 하나의 객체로 담김
  }, []); // 처음 마운트 될때만 ! => 그럼 새로 생성이 안되겠지? => 그거를 value로 전달해주면 더이상 리랜더링이 안되겠지

  return (
    <div className="App">
      <Header />
      {/* provider는 공급자 역할 */}
      <TodoStateContext.Provider value={todos}>
        {/* todos는 배열 */}
        {/* <TodoDispatchContext.Provider value={{ onCreate, onDelete, onUpdate }}> 이렇게 하면 새로 생성이 됨 */}
        <TodoDispatchContext.Provider value={memoizedDispatch}>
          {/* memoizedDispatch는 객체 */}
          <Editor />
          <List />
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>

      {/* <Exam /> */}
    </div>
  );
}

export default App;
