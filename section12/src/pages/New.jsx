import Header from "./../components/Header";
import Button from "./../components/Button";
import Editor from "../components/Editor";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { DiaryDispatchContext } from "../App";
// 3종 함수 포함되어있는 디스패치 컨텍스트

const New = () => {
  const { onCreate } = useContext(DiaryDispatchContext);

  // nav
  const nav = useNavigate();

  // Editor에서 입력한 정보들을 매개변수 input으로 받아옴
  const onSubmit = (input) => {
    // onCreate(input.createdDate, input.emotionId, input.content); => 날짜가 Tue Oct 21 2025 11:32:30 GMT+0900 이렇게 나옴 타임스탬프해야지
    onCreate(input.createdDate.getTime(), input.emotionId, input.content); // 입력한 날짜, 감정, 내용 => App.jsx에 있는 onCreate가 돌아가게 됨 => 추가
    nav("/", { replace: true }); // replace를 설정하면 뒤로가기가 방지됨
  };

  return (
    <div>
      <Header
        title={"새 일기 쓰기"}
        leftChild={
          <Button
            onClick={() => {
              nav(-1);
            }}
            text={"< 뒤로 가기"}
          />
        }
      />
      <Editor onSubmit={onSubmit} />
    </div>
  );
};

export default New;
