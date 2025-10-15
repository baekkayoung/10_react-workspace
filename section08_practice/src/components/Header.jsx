import "./Header.css";

const Header = () => {
  return (
    <div className="Header">
      <h3>반갑습니다 ! &lt;(＿ ＿)&gt; 💝</h3>
      <h1>
        {new Date().toLocaleDateString("ko-Kr", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </h1>
    </div>
  );
};

export default Header;
