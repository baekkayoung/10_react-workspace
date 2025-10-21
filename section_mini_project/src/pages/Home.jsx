import TarotOrb from "./../components/TarotOrb";
import Header from "./../components/Header";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Home = () => {
  const nav = useNavigate();
  const [isPlaying, setIsPlaying] = useState(false);

  const today = new Date();
  const todayDate = `${today.getFullYear()}년 ${
    today.getMonth() + 1
  }월 ${today.getDate()}일`;

  return (
    <div className="Home">
      <Header
        title={todayDate}
        leftChild={
          <Button
            onClick={() => {
              nav("/bookMark");
            }}
            text={"⭐"}
          />
        }
        rightChild={
          <Button
            onClick={() => setIsPlaying(!isPlaying)}
            text={isPlaying ? "■" : "▶"}
          />
        }
      />
    </div>
  );
};

export default Home;
