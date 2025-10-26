import { useState, useEffect } from "react";
import "./TodoEditor.css";
import Button from "./Button";
import { getStringedDate } from "../util/get-stringed-date";

const TodoEditor = ({ onSubmit, initialDate, initData }) => {
  const [todos, setTodos] = useState([{ id: 1, text: "", completed: false }]);
  const [selectedDate, setSelectedDate] = useState(initialDate || new Date());

  useEffect(() => {
    if (initData) {
      setTodos(initData.todos);
      setSelectedDate(new Date(initData.date));
    }
  }, [initData]);

  const addTodo = () => {
    const newId =
      todos.length > 0 ? Math.max(...todos.map((t) => t.id)) + 1 : 1;
    setTodos([...todos, { id: newId, text: "", completed: false }]);
  };

  const removeTodo = (id) => {
    if (todos.length > 1) {
      setTodos(todos.filter((todo) => todo.id !== id));
    }
  };

  const updateTodoText = (id, text) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, text } : todo)));
  };

  const handleSubmit = () => {
    const validTodos = todos.filter((todo) => todo.text.trim() !== "");
    if (validTodos.length === 0) {
      alert("최소 1개의 할 일을 입력해주세요!");
      return;
    }

    onSubmit(selectedDate.getTime(), validTodos);
  };

  return (
    <div className="TodoEditor">
      <section className="date_section">
        <h4>날짜</h4>
        <input
          type="date"
          value={getStringedDate(selectedDate)}
          onChange={(e) => setSelectedDate(new Date(e.target.value))}
        />
      </section>

      <section className="todo_section">
        <div className="todo_section_header">
          <h4>할 일 목록</h4>
          <Button text="+ 추가" type="POSITIVE" onClick={addTodo} />
        </div>

        {todos.map((todo, index) => (
          <div key={todo.id} className="todo_input_wrapper">
            <span className="todo_number">{index + 1}.</span>
            <input
              type="text"
              value={todo.text}
              onChange={(e) => updateTodoText(todo.id, e.target.value)}
              placeholder="할 일을 입력하세요"
              className="todo_input"
            />
            {todos.length > 1 && (
              <button
                onClick={() => removeTodo(todo.id)}
                className="todo_remove_btn"
              >
                삭제
              </button>
            )}
          </div>
        ))}
      </section>

      <section className="button_section">
        <Button text="작성완료" type="POSITIVE" onClick={handleSubmit} />
      </section>
    </div>
  );
};

export default TodoEditor;
