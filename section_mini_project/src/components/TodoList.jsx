import "./TodoList.css";
import Button from "./Button";

const TodoList = ({
  selectedDate,
  selectedDateData,
  onNavigate,
  toggleTodo,
  data,
}) => {
  const getCompletionRate = (date) => {
    const dateTime = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate()
    ).getTime();
    const dayData = data.find((item) => {
      const itemDate = new Date(item.date);
      return (
        new Date(
          itemDate.getFullYear(),
          itemDate.getMonth(),
          itemDate.getDate()
        ).getTime() === dateTime
      );
    });

    if (!dayData || dayData.todos.length === 0) return 0;
    const completed = dayData.todos.filter((todo) => todo.completed).length;
    return Math.round((completed / dayData.todos.length) * 100);
  };

  return (
    <div className="TodoList">
      <div className="todolist_header">
        <h3>
          {selectedDate.getMonth() + 1}월 {selectedDate.getDate()}일의 할 일
        </h3>
        <div className="todolist_buttons">
          <Button
            text="작성하기"
            type="POSITIVE"
            onClick={() => onNavigate("new", { date: selectedDate.getTime() })}
          />
          {selectedDateData && selectedDateData.todos.length > 0 && (
            <Button
              text="수정하기"
              onClick={() => onNavigate("edit", { id: selectedDateData.id })}
            />
          )}
        </div>
      </div>

      {!selectedDateData || selectedDateData.todos.length === 0 ? (
        <div className="todolist_empty">등록된 TodoList가 없습니다 🌱</div>
      ) : (
        <div className="todolist_content">
          {selectedDateData.todos.map((todo) => (
            <div key={todo.id} className="todo_item">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
                className="todo_checkbox"
              />
              <span
                className={`todo_text ${todo.completed ? "completed" : ""}`}
              >
                {todo.text}
              </span>
            </div>
          ))}
          <div className="todolist_rate">
            달성률: {getCompletionRate(selectedDate)}%
          </div>
        </div>
      )}
    </div>
  );
};

export default TodoList;
