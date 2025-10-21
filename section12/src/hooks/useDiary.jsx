import { useContext, useState, useEffect } from "react";
import { DiaryStateContext } from "../App";
import { useNavigate } from "react-router-dom";

const useDiary = (id) => {
  const data = useContext(DiaryStateContext); // 모든 일기가 다 담겨있는 data
  const [curDiaryItem, setCurDiaryItem] = useState(); // 아무것도없기대문에
  const nav = useNavigate();

  useEffect(() => {
    //
    const currentDiaryItem = data.find(
      (item) => String(item.id) === String(id) // params.id
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
  }, [id]); // params.id

  return curDiaryItem; // 찾아서 반환
};

export default useDiary;
