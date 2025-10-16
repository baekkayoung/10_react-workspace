import "./List.css";
import TodoItem from "./TodoItem";
import { useState } from "react";

const List = ({ todos, onUpdate, onDelete }) => {
  // 객체배열! 할일 담김. 구조분해 할당
  // 부모로부터 받아온 todos가 있는데 그걸 map 함수로 하나씩 콜백함수로.. 인자 개수만큼 돌고
  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getFilteredDate = () => {
    if (search === "") {
      return todos; // 검색조차 안했을 시 객체배열 반환
    }
    return todos.filter((todo) =>
      todo.content.toLowerCase().includes(search.toLowerCase())
    );
    // todos배열 순회하면서 조건을 만족하는 것만 다시 배열로 만드는 메소드
    // 필터랑 인클루즈 보기
  };

  const filterdTodos = getFilteredDate(); // 할일 | 검색된 할일

  return (
    <div className="List">
      <h4>Todo List 🎈</h4>
      <input
        onChange={onChangeSearch}
        value={search}
        placeholder="검색어를 입력하세요"
      />
      {/* todo에는 할일 하나 */}
      <div className="todos_wrapper">
        {filterdTodos.map((todo) => {
          //   return <div>{todo.content}</div>;
          console.log(todo);
          return (
            <TodoItem
              key={todo.id}
              {...todo}
              onUpdate={onUpdate}
              onDelete={onDelete}
            />
          ); //js 문법이기때문에 {}
          // unique한 key값을 줘야함
        })}
      </div>
    </div>
  );
};

export default List;
