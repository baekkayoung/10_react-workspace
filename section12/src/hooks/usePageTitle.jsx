import { useEffect } from "react";

const usePageTitle = (title) => {
  useEffect(() => {
    const $title = document.getElementsByTagName("title")[0]; // s니까 배열
    $title.innerText = title;
  }, [title]); // 타이틀이 바뀔 때마다 이 함수가 돌게 됨
};
export default usePageTitle;
