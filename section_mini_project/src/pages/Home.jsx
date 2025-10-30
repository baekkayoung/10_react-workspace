import { useState, useContext } from "react";
import Header from "../components/Header";
import Button from "../components/Button";
import Calendar from "../components/Calendar";
import TodoList from "../components/TodoList";
import { TodoStateContext, TodoDispatchContext } from "../App";
import usePageTitle from "../hooks/usePageTitle.js";

const Home = ({ onNavigate }) => {
  const data = useContext(TodoStateContext);
  const { onUpdate } = useContext(TodoDispatchContext);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  usePageTitle("TodoSprout 🌱");

  const getSelectedDateTodos = () => {
    const dateTime = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth(),
      selectedDate.getDate()
    ).getTime();

    return data.find((item) => {
      const itemDate = new Date(item.date);
      return (
        new Date(
          itemDate.getFullYear(),
          itemDate.getMonth(),
          itemDate.getDate()
        ).getTime() === dateTime
      );
    });
  };

  const toggleTodo = (todoId) => {
    const selectedDateData = getSelectedDateTodos();
    if (!selectedDateData) return;

    const updatedTodos = selectedDateData.todos.map((todo) =>
      todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
    );

    onUpdate(selectedDateData.id, selectedDateData.date, updatedTodos);
  };

  const onPrevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1)
    );
  };

  const onNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1)
    );
  };

  const onSelectDate = (date) => {
    if (date) {
      setSelectedDate(date);
    }
  };

  const selectedDateData = getSelectedDateTodos();

  return (
    <div>
      <Header
        title={`${currentDate.getFullYear()}년 ${currentDate.getMonth() + 1}월`}
        leftChild={<Button onClick={onPrevMonth} text={"<"} />}
        rightchild={<Button onClick={onNextMonth} text={">"} />}
      />

      <Calendar
        currentDate={currentDate}
        selectedDate={selectedDate}
        onSelectDate={onSelectDate}
        data={data}
      />

      <TodoList
        selectedDate={selectedDate}
        selectedDateData={selectedDateData}
        onNavigate={onNavigate}
        toggleTodo={toggleTodo}
        data={data}
      />
    </div>
  );
};

export default Home;
