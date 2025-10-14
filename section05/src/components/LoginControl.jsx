import { useState } from "react";

const LoginControl = () => {
  // 로그인 상태를 useState로 관리
  const [isLogin, setIsLogin] = useState(false);

  //   const handleLogin = () => {
  //     setIsLogin(true);
  //   };

  //   const handleLogout = () => {
  //     setIsLogin(false);
  //   };

  const handleToggle = () => setIsLogin(!isLogin);

  return (
    <>
      <h1>{isLogin ? "환영합니다!" : "로그인이 필요합니다."}</h1>
      <button onClick={handleToggle}>{isLogin ? "로그아웃" : "로그인"}</button>
    </>
  );
};

export default LoginControl;
