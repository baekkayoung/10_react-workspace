import { useParams } from "react-router-dom";

const Diary = () => {
  const params = useParams();
  console.log(params); // diary/1 하면 id가 1로 뜸
  return <div>{params.id}번 일기입니다.</div>;
};

export default Diary;
