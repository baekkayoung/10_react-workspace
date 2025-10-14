import { useEffect } from "react";

const Even = () => {
  useEffect(() => {
    // 클린업, 정리함수 : useEffect 가 끝날때, upMount 될 때
    return () => {
      console.log("upmount");
    };
  }, []);
  return <div>짝수입니다</div>;
};

export default Even;
