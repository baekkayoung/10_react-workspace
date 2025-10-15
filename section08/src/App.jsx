import "./App.css";
import Editor from "./components/Editor";
import Header from "./components/Header";
import List from "./components/List";

import { useState, useRef } from "react";

function App() {
  const mockDate = [
    {
      id: 0,
      isDone: false,
      content: "React 공부하기",
      date: new Date().getTime(), // 오늘의 날짜 기준으로 타임스템프
    },
    {
      id: 1,
      isDone: false,
      content: "React 복습하기",
      date: new Date().getTime(), // 오늘의 날짜 기준으로 타임스템프
    },
    {
      id: 2,
      isDone: false,
      content: "React 예습하기",
      date: new Date().getTime(), // 오늘의 날짜 기준으로 타임스템프
    },
  ]; // 임시 데이터. 할일을 객체로 표현해야 함. 왜? 현실의 있는 일을 프로그램상에서 표현하려면 객체밖에 답이 없음

  // const [todos, setTodos] = useState([]); // 할 일이 여러개니까 배열에 저장해야 함
  const [todos, setTodos] = useState(mockDate);
  const idRef = useRef(3); // Ref는 current

  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content: content,
      date: new Date().getTime(),
    };

    // todos.push(newTodo); 이렇게 하면 안됨 setTodos를 이용하여 함수 만들어야 함
    setTodos([newTodo, ...todos]); // spread 연산자
  };

  const onUpdate = (targetId) => {
    // todos 객체 배열 값들 중에 targetId와 일치하는 id를 갖는 투두를 찾고 해당 아이템의 isDone 변경

    // 인수 : todos 배열에서 targetId와 일치하는 id를 갖는 요소의 데이터만 딱 바꾼 새로운 배열
    setTodos(
      todos.map((todo) => {
        // map() ? return 한거 가지고 배열을 만든다
        if (todo.id === targetId) {
          // 내가 수정하려고하는 할일 만났을때
          return { ...todo, isDone: !todo.isDone }; //할일은 객체니까 {} 리턴 // 새로운 객체, isDone으 여부만 볁경
        }
        return todo;
      })
    );
  };

  const onDelete = (targetId) => {
    // 하나만 지우는 거니까 id 받아오기
    // 인수 : todos 배열에서 targetId와 일치하는 id를 갖는 요소만 삭제한 새로운 배열
    // map을 써도 됨
    // filter는 콜백함수를 갖는다
    setTodos(todos.filter((todo) => todo.id !== targetId));
    // 같지 않은 것만 모여서 새로운 배열을 리턴! 같은 건 빠져
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
