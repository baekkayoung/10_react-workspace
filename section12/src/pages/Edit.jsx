import { replace, useNavigate, useParams } from "react-router-dom";
import Header from "./../components/Header";
import Button from "./../components/Button";
import Editor from "./../components/Editor";
import { useContext, useEffect, useState } from "react";
import { DiaryDispatchContext, DiaryStateContext } from "./../App";
import useDiary from "./../hooks/useDiary";
import usePageTitle from "../hooks/usePageTitle";

const Edit = () => {
  const params = useParams();
  const nav = useNavigate();
  //useDiary.jsx

  usePageTitle(`${params.id}번 일기 수정`);

  const { onDelete, onUpdate } = useContext(DiaryDispatchContext);
  const curDiaryItem = useDiary(params.id);
  // const data = useContext(DiaryStateContext); useDiary.jsx

  // 모든 일기가 다 담겨있는 data
  // 근데 우리가 원하는건 하나의 일기를 수정하는것!

  // const [curDiaryItem, setCurDiaryItem] = useState(); useDiary.jsx

  // const currentDiaryItem = getCurrentDiaryItem(); 오류
  /*useEffect(() => {  useDiary.jsx
    //
    const currentDiaryItem = data.find(
      (item) => String(item.id) === String(params.id)
    );
    // 내가 수정하고자하는 id와 해당 id가 일치
    // 변수에 담아주기

    if (!currentDiaryItem) {
      // undefind
      alert("존재하지 않는 일기입니다!");
      nav("/", { replace: true }); // 원래는 컴포넌트가 다 그려지고나서 호출되어야 함
    }
    // return currentDiaryItem;
    setCurDiaryItem(currentDiaryItem); // find로 찾은 일기 currentDiaryItem
  }, [params.id]);*/

  const onClickDelete = () => {
    // console.log(confirm("일기를 정말 삭제할까요? 다시 복구되지 않아요!"));
    // // window.
    // confirm("일기를 정말 삭제할까요? 다시 복구되지 않아요!");

    if (confirm("일기를 정말 삭제할까요? 다시 복구되지 않아요!")) {
      // 일기 삭제 로직
      onDelete(params.id);
      nav("/", { replace: true }); // 메인으로 이동, 뒤로가기 방지
      // /edit/5
    }
  };

  // 하나의 일기
  const getCurrentDiaryItem = () => {
    // const currentDiaryItem = data.find(
    //   (item) => String(item.id) === String(params.id)
    // );
    // // 내가 수정하고자하는 id와 해당 id가 일치
    // // 변수에 담아주기
    // if (!currentDiaryItem) {
    //   // undefind
    //   alert("존재하지 않는 일기입니다!");
    //   nav("/", { replace: true }); // 원래는 컴포넌트가 다 그려지고나서 호출되어야 함
    // }
    // return currentDiaryItem;
  };

  const currentDiaryItem = getCurrentDiaryItem();
  // Edit.jsx:40 You should call navigate() in a React.useEffect(), not when your component is first rendered.
  // ⇒ 컴포넌트 렌더링 하고나서 호출해야지! useEffect 사용!
  console.log(currentDiaryItem);

  const onSubmit = (input) => {
    if (confirm("일기를 정말 수정할까요?")) {
      // onUpdate(params.id, input.createdDate, input.emotionId, input.content);
      onUpdate(
        params.id,
        input.createdDate.getTime(), // createdDate: new Date(),
        input.emotionId,
        input.content
      );
      nav("/", { replace: true });
    }
  };

  return (
    <div>
      <Header
        title={"일기 수정하기"}
        leftChild={
          <Button
            onClick={() => {
              nav(-1);
            }}
            text={"< 뒤로가기"}
          />
        }
        rightchild={
          <Button onClick={onClickDelete} text={"삭제하기"} type={"NEGATIVE"} />
        }
      />
      <Editor onSubmit={onSubmit} initData={curDiaryItem} />
    </div>
  );
};

export default Edit;
