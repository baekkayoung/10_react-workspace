import { useState, useContext } from "react";

// import { useSearchParams } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import DiaryList from "../components/DiaryList";

import { DiaryStateContext } from "../App";
import usePageTitle from "../hooks/usePageTitle";

// 해당 월에 일기를 조회해주는 함수
const getMonthlyData = (pivotDate, data) => {
  // 기준날짜, 모든일기
  const beginTime = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth(),
    1,
    0,
    0,
    0
  ).getTime();

  const endTime = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth() + 1,
    0,
    11,
    59,
    59
  ).getTime(); // 2025 - 11 - 0일은 없음 => 10/31로 셋팅

  return data.filter(
    (item) => beginTime <= item.createdDate && item.createdDate <= endTime
    // monthlyData에 담김
  );
};

const Home = () => {
  const data = useContext(DiaryStateContext);
  // 배열로 보내온거라 그냥 data로 받으면 됨
  // 얘 왜 호출? 부모로부터 프롭스가 아닌 컨텍스트로 받음 . 모든 일기가 다 있음

  const [pivotDate, setPivotDate] = useState(new Date());
  // 초기값 : newDate 오늘날짜
  // 해당 월의 일기들만 모임

  usePageTitle("감정 일기장");

  const monthlyData = getMonthlyData(pivotDate, data); // [{오늘날짜}, {모든일기}]
  console.log(monthlyData);

  // const [params, setParams] = useSearchParams();
  // console.log(params.get("value")); 입력한거
  //http://localhost:5178/?value=hello

  const onIncreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));
  };
  const onDecreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1));
  };

  return (
    <div>
      <Header
        title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`}
        leftChild={<Button onClick={onDecreaseMonth} text={"<"} />}
        rightchild={<Button onClick={onIncreaseMonth} text={">"} />}
      />
      <DiaryList data={monthlyData} /> {/* 이달의 일기를 줌*/}
    </div>
  );
};

export default Home;
