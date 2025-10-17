import Button from "./Button";
import DiaryItem from "./DiaryItem";
import "./DiaryList.css";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

const DiaryList = ({ data }) => {
  // <DiaryList data={monthlyData} />
  // 이번달의 일기들이 담긴

  const nav = useNavigate();

  const [sortType, setSortType] = useState("latest");

  const onChangeSortType = (e) => {
    setSortType(e.target.value);
  };

  // https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
  // https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/toSorted

  // 정렬된 데이터를 뱉어주는 함수
  // tosorted => 사전순으로 배열을 만들어주는 함수
  // 배열을 사전순으로 배열..?
  // 사전순으로 배열 어려운거는 콜백함수로 이렇게할 수 있음
  const getSortedData = () => {
    return data.toSorted((a, b) => {
      if (sortType === "oldest") {
        return Number(a.createdDate) - Number(b.createdDate);
      } else {
        return Number(b.createdDate) - Number(a.createdDate);
      }
    });
  };

  // 정렬된 데이터가 저장됨 => 얘로 map을 찍으면 됨
  const sortedData = getSortedData();

  return (
    <div className="DiaryList">
      <div className="menu_bar">
        <select onChange={onChangeSortType}>
          <option value={"latest"}>최신순</option>
          <option value={"oldest"}>오래된 순</option>
        </select>
        <Button
          type={"POSITIVE"}
          text={"새 일기 쓰기"}
          onClick={() => nav("/new")}
        />
      </div>
      <div className="list_wrapper">
        {/* {data.map((item) => (
          <DiaryItem key={item.id} {...item} />
        ))} */}
        {sortedData.map((item) => (
          <DiaryItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default DiaryList;
