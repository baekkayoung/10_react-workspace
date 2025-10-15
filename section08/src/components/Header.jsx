import "./Header.css";

const Header = () => {
  return (
    <div className="Header">
      {/* 항상 상위요소에 클래스 네임 부여 후 css */}
      <h3>오늘은 💌 </h3>
      <h1>{new Date().toDateString()}</h1> {/* 오늘의 날짜를 스트링으로 */}
    </div>
  );
};

export default Header;
