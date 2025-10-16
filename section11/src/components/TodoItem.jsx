import "./TodoItem.css";
import { memo, useContext } from "react";
import { TodoContext } from "../App";
import { TodoDispatchContext } from "../App";

const TodoItem = ({ id, isDone, content, date }) => {
  // const { onUpdate, onDelete } = useContext(TodoContext);
  const { onUpdate, onDelete } = useContext(TodoDispatchContext);

  // 인자인 id를 매개변수로 전달
  const onChangeCheckbox = () => {
    onUpdate(id);
  };

  const onClickButton = () => {
    onDelete(id);
  };
  return (
    <div className="TodoItem">
      <input onChange={onChangeCheckbox} checked={isDone} type="checkbox" />
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button onClick={onClickButton}>삭제</button>
    </div>
  );
};
// export default TodoItem;
// export default memo(TodoItem);

/*
// 이렇게 해도 왜 다 체크되는지? 주소값이 바뀌어서 그럼 upDate, delete의 객체타입이라 새로운 주소값을 계속 가지고 오기 때문에.. 주소값의 형태때문에
// 객체 주소값이 계속 바뀜
// 얕은 비교
export default memo(TodoItem, (prevProps, nextProps) => {
  // 반환값에 따라, Props 바뀌었는지 안바뀌었는지 판단
  // ture => Props 바뀌지 않음 => 리렌더링 x
  // false => props 바뀜 => 리렌더링 o
  if (prevProps.id !== nextProps.id) return false;
  if (prevProps.isDone !== nextProps.isDone) return false;
  if (prevProps.content !== nextProps.content) return false;
  if (prevProps.date !== nextProps.date) return false;
  return true;
});
// 콜백함수에 바뀐게 아니라는 걸 알려줘야 함
// 과거props, 현재 props 비교해서 t/f
// => 이런 하드코딩은 효율적인 코드가 아님. => useCallback : 불필요한 함수 재생성 방지
*/

// useCallBack 훅 사용 후
// 고차함수 (HOC : Higher Order Component)
// https://patterns-dev-kr.github.io/design-patterns/hoc-pattern/
export default memo(TodoItem);

/*
  -최적화는 언제하는가?
  -최적화는 어떤것을 하는가?

  1. 먼저 기능을 구현을 한다
  2. 기능 완성이 되면 최적화를 하는게 일반적인 방법
  3. 너무 간단한 컴포넌트는 오히려 최적화를 안하는 게 낫다

  https://goongoguma.github.io/2021/04/26/When-to-useMemo-and-useCallback/


*/
