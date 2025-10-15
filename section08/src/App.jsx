import "./App.css";
import Editor from "./components/Editor";
import Header from "./components/Header";
import List from "./components/List";

import { useState, useRef } from "react";

function App() {
  const mockDate = [
    // 임시 데이터 넣는 이유 : 화면에서 보면서 코드 짜는 게 간편하니까.
    // 할일을 객체로 표현해야 함. 왜? 현실의 있는 일을 프로그램상에서 표현하려면 객체로 표현
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

  // useState() 괄호안에 들어가는 값은 상태의 초기값 => 여러개 담으니까 배열이 들어가야 함
  // const [todos, setTodos] = useState([]); // 빈 배열로 시작해도 됨. 여러개를 담아야 하니까 배열에 저장
  const [todos, setTodos] = useState(mockDate); // 초기값을 mockDate(객체가 담긴 "배열")로 저장
  const idRef = useRef(3); // 다음 id 관리. Ref는 current로 접근

  // Editor.jsx에서 입력받은 content로 newTodo를 만들고 기존 todos 배열에 합쳐서 화면을 다시 렌더링
  const onCreate = (content) => {
    // 새로운 할 일 하나를 객체로 만들어서 저장
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content: content,
      date: new Date().getTime(),
    };

    // todos.push(newTodo); => 기존 배열을 직접 바꾸는 코드
    // React는 직접 변경을 감지하지 못 함 => 화면이 바뀌지 않음
    // setTodos[...]로 새로운 배열을 만들어서 교체해야 React가 변화를 감지함 => 자동으로 화면을 렌더링

    setTodos([newTodo, ...todos]);
    // todos의 상태를 [] 안의 새로운 배열로 교체하겠다는 의미.
    // spread 연산자 (...todos): 새 할 일을 맨 앞에 추가하는 구조
  };

  // TodoItem의 onChangeCheckbox()의 onUpdate(id)의 id를 인자로 매개변수인 targetId에 전달
  const onUpdate = (targetId) => {
    // todos 객체 배열 값들 중에 targetId와 일치하는 id를 갖는 투두를 찾고 해당 아이템의 isDone 변경

    // 인수 : todos 배열에서 targetId와 일치하는 id를 갖는 요소의 데이터만 딱 바꾼 새로운 배열
    setTodos(
      todos.map((todo) => {
        // map() ? return 한거 가지고 배열을 만든다
        if (todo.id === targetId) {
          // 내가 수정하려고하는 할일 만났을때
          return { ...todo, isDone: !todo.isDone };
          //할일은 객체니까 {} 리턴 새로운 객체 생성, isDone 여부만 변경
          // isDone : !todo.isDone => 속성 이름 : 값
        }
        return todo;
        // 클릭하지 않은 todo들은 그대로
      })
    );
  };

  const onDelete = (targetId) => {
    // 하나만 지우는 거니까 id 받아오기
    // 인수 : todos 배열에서 targetId와 일치하는 id를 갖는 요소만 삭제한 새로운 배열
    // map을 써도 됨
    // filter는 콜백함수를 갖는다
    setTodos(todos.filter((todo) => todo.id !== targetId));
    // filter() => 조건 (같지 않은 것만 모여서 새로운 배열을 리턴! 같은 건 빠져)에 해당하는 것만 남김
    // 같지 않은 것 = 선택하지 않은 것 = > 선택한 것을 삭제하고 리턴
  };

  /* const onDeleteMap = (targetId) => {
    let arr = [];
    todos.map((todo) => {
      if (todo.id !== targetId) {
        arr.push(todo);
      }
    });
    setTodos(arr);
  }; */

  return (
    <div className="App">
      <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
}

export default App;
