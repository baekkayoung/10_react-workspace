import Header from "./../components/Header";
import { useContext } from "react";
import { TarotStateContext } from "../App";
const BookMark = () => {
  const todayDate = useContext(TarotStateContext);
  return (
    <div>
      <Header title={todayDate} />
    </div>
  );
};

export default BookMark;
