import { useParams } from "react-router-dom";

const Diary = () => {
  const params = useParams();
  // useParams() URL에 포함된 파라미터를 객체로 꺼내주는 훅
  console.log(params); // diary/1 하면 id가 1로 뜸
  return <div>{params.id}번 일기입니다.</div>;
};

export default Diary;
