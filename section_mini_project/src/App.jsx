import "./App.css";
import Home from "./pages/Home";
import Draw from "./pages/Draw";
import BookMark from "./pages/Bookmark";
import Detail from "./pages/Detail";
import Button from "./components/Button";
import Notfound from "./pages/Notfound";
import { Routes, Route, useNavigate } from "react-router-dom";
import { createContext, useState } from "react";

const tarotMockData = [
  {
    id: 1,
    createdDate: new Date("2025-10-21").getTime(),
    cardName: "The Sun",
    advice: "오늘은 자신감 넘치는 하루예요!",
    item: "골드 팔찌",
    number: 7,
    bookmarked: false,
  },
  {
    id: 2,
    createdDate: new Date("2025-10-20").getTime(),
    cardName: "The Moon",
    advice: "직감에 귀 기울이는 것이 중요합니다.",
    item: "달빛 목걸이",
    number: 3,
    bookmarked: true,
  },
  {
    id: 3,
    createdDate: new Date("2025-10-19").getTime(),
    cardName: "The Star",
    advice: "작은 희망이 큰 변화를 만듭니다.",
    item: "은반지",
    number: 5,
    bookmarked: false,
  },
  {
    id: 4,
    createdDate: new Date("2025-10-18").getTime(),
    cardName: "The Lovers",
    advice: "소중한 사람과의 소통이 필요해요.",
    item: "하트 열쇠고리",
    number: 2,
    bookmarked: true,
  },
  {
    id: 5,
    createdDate: new Date("2025-10-17").getTime(),
    cardName: "The Hermit",
    advice: "혼자만의 시간을 가지며 생각해보세요.",
    item: "작은 촛대",
    number: 9,
    bookmarked: false,
  },
];

export const TarotStateContext = createContext(); // 가변
export const TarotDispatchContext = createContext(); // 불변

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const today = new Date();
  const todayDate = `${today.getFullYear()}년 ${
    today.getMonth() + 1
  }월 ${today.getDate()}일`;

  const nav = useNavigate();

  return (
    <>
      <TarotStateContext.Provider value={todayDate}>
        <TarotDispatchContext.Provider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/draw" element={<Draw />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/bookMark" element={<BookMark />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </TarotDispatchContext.Provider>
      </TarotStateContext.Provider>
    </>
  );
}

export default App;
