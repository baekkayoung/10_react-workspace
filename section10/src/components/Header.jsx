import "./Header.css";
import { memo } from "react";

const Header = () => {
  return (
    <div className="Header">
      {/* 항상 상위요소에 클래스 네임 부여 후 css */}
      <h3>오늘은 💌 </h3>
      <h1>{new Date().toDateString()}</h1> {/* 오늘의 날짜를 스트링으로 */}
    </div>
  );
};

const memoizedHeader = memo(Header);
// 최적화가된 컴포넌트가 변수에 담김

// export default Header;

export default memoizedHeader;
// 최적화된 컴포넌트 익스포트
//export default memo(Header);
