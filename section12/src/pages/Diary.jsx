import { useNavigate, useParams } from "react-router-dom";
import Header from "./../components/Header";
import Button from "./../components/Button";
import Viewer from "./../components/Viewer";
import { Navigate } from "react-router-dom";
import useDiary from "../hooks/useDiary";
import { createContext, useState } from "react";
import { getStringedDate } from "./../util/get-stringed-date";

const Diary = () => {
  const params = useParams();
  const nav = useNavigate();

  // // useParams() URL에 포함된 파라미터를 객체로 꺼내주는 훅
  // console.log(params); // diary/1 하면 id가 1로 뜸

  const curDiaryItem = useDiary(params.id);
  console.log(curDiaryItem);

  if (!curDiaryItem) {
    return <div>데이터 로딩중..</div>;
  }

  const { createdDate, emotionId, content } = curDiaryItem;

  const title = getStringedDate(new Date(createdDate));

  return (
    <div>
      <Header
        title={`${title} 기록`}
        leftChild={
          <Button
            onClick={() => {
              nav(-1);
            }}
            text={"< 뒤로가기"}
          />
        }
        rightchild={
          <Button
            onClick={() => {
              nav(`/edit/${params.id}`);
            }}
            text={"수정하기"}
          />
        }
      />
      <Viewer emotionId={emotionId} content={content} />
    </div>
  );
};

export default Diary;
