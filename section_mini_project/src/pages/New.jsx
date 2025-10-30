import { useContext } from "react";
import Header from "../components/Header";
import Button from "../components/Button";
import TodoEditor from "../components/TodoEditor";
import { TodoDispatchContext } from "../App";
import usePageTitle from "../hooks/usePageTitle";

const New = ({ onNavigate, initialDate }) => {
  const { onCreate } = useContext(TodoDispatchContext);

  usePageTitle("새로운 할 일 작성");

  const onSubmit = (date, todos) => {
    onCreate(date, todos);
    onNavigate("home");
  };

  return (
    <div>
      <Header
        title="새로운 할 일 작성"
        leftChild={
          <Button onClick={() => onNavigate("home")} text={"< 뒤로가기"} />
        }
      />
      <TodoEditor onSubmit={onSubmit} initialDate={initialDate} />
    </div>
  );
};

export default New;
