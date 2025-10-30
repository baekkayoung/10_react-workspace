import { useContext } from "react";
import Header from "../components/Header";
import Button from "../components/Button";
import TodoEditor from "../components/TodoEditor";
import { TodoDispatchContext, TodoStateContext } from "../App";
import usePageTitle from "../hooks/usePageTitle.js";

const Edit = ({ onNavigate, todoId }) => {
  const data = useContext(TodoStateContext);
  const { onUpdate, onDelete } = useContext(TodoDispatchContext);

  usePageTitle("할 일 수정");

  const currentTodoItem = data.find(
    (item) => String(item.id) === String(todoId)
  );

  if (!currentTodoItem) {
    return (
      <div style={{ textAlign: "center", padding: "100px 20px" }}>
        <p style={{ fontSize: "20px", color: "#4A7C59" }}>
          존재하지 않는 데이터입니다.
        </p>
        <Button
          text="홈으로 가기"
          type="POSITIVE"
          onClick={() => onNavigate("home")}
        />
      </div>
    );
  }

  const onSubmit = (date, todos) => {
    if (window.confirm("정말 수정하시겠습니까?")) {
      onUpdate(currentTodoItem.id, date, todos);
      onNavigate("home");
    }
  };

  const onClickDelete = () => {
    if (
      window.confirm(
        "정말 삭제하시겠습니까? 삭제된 데이터는 복구할 수 없습니다!"
      )
    ) {
      onDelete(currentTodoItem.id);
      onNavigate("home");
    }
  };

  return (
    <div>
      <Header
        title="할 일 수정하기"
        leftChild={
          <Button onClick={() => onNavigate("home")} text={"< 뒤로가기"} />
        }
        rightchild={
          <Button onClick={onClickDelete} text={"삭제하기"} type={"NEGATIVE"} />
        }
      />
      <TodoEditor
        onSubmit={onSubmit}
        initialDate={new Date(currentTodoItem.date)}
        initData={currentTodoItem}
      />
    </div>
  );
};

export default Edit;
