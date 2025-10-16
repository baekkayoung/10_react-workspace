import "./List.css";
import TodoItem from "./TodoItem";
import { useState, useMemo } from "react";

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

  /*
  const getAnalyzedData = () => {
    console.log("오래걸리는 분석함수 호출");
    const totalCount = todos.length;
    const doneCount = todos.filter((todo) => todo.isDone).length;
    const notDoneCount = totalCount - doneCount;
    return {
      totalCount: totalCount,
      doneCount,
      notDoneCount,
    };
  };*/

  // 콜백함수, 의존성 배열(dpes)
  // 배열이 바뀔 때마다 콜백함수 작용
  const { totalCount, doneCount, notDoneCount } = useMemo(() => {
    console.log("오래걸리는 분석함수 호출");
    const totalCount = todos.length;
    const doneCount = todos.filter((todo) => todo.isDone).length;
    const notDoneCount = totalCount - doneCount;
    return {
      totalCount: totalCount,
      doneCount,
      notDoneCount,
    };
  }, [todos]);
  // [] 로 해두면 최초의 마운트때 한 번 돎
  // [todos] todos가 바뀔때 콜백함수가 돎
  // 객체를 return 하면 구조분해 할당으로 받을 수 있음

  // 구조 분해 할당으로 받기
  // const { totalCount, doneCount, notDoneCount } = getAnalyzedData();

  return (
    <div className="List">
      <h4>Todo List 🎈</h4>
      <div>total : {totalCount}</div>
      <div>done : {doneCount}</div>
      <div>notDone : {notDoneCount}</div>
      <input
        onChange={onChangeSearch}
        value={search}
        placeholder="검색어를 입력하세요"
      />
      <div className="todos_wrapper">
        {filterdTodos.map((todo) => {
          //   return <div>{todo.content}</div>;
          // console.log(todo);
          return (
            <TodoItem
              key={todo.id}
              {...todo}
              onUpdate={onUpdate}
              onDelete={onDelete}
            />
          );
        })}
      </div>
    </div>
  );
};

export default List;
