import { useState, useEffect, useRef } from "react";
import "./App.css";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import Even from "./components/Even";

function App() {
  const [count, setCount] = useState(0); // viewer한테 줘야하니까 props 문법 사용
  const [input, setInput] = useState("");

  const isMount = useRef(false);

  // 1. 마운트 : 탄생
  useEffect(() => {
    console.log("mount");
  }, []); // 빈 배열. 최초의 한 번 만 실행 시키고 싶은 코드가 있으면 이렇게. db가지고 올 때 쓰면 될듯

  // 2. 업데이트 : 변화, 리렌더링
  // ref 자체가 객체이기때문에 current로 접근해야 함
  useEffect(() => {
    if (!isMount.current) {
      //isMount.current가 false라면
      isMount.current = true;
      return;
    }
    console.log("update");
  });
  // 배열을 안 쓰게 되면 변화가 일어날때마다 돎 근데 처음 마운트때도 얘가 뜨는데.. useRef 사용하면 됨
  // useRef의 장점 : 리렌더링이 되지않는다는 장점 => false를 넣어둠
  // isMount의 값이 f일 경우 true로 바꾸고 return으로 종료를 시켜버리면 console.log("update")까지 안 감

  // 3. 업마운트 : 죽음

  /*
  useEffect(() => {
    console.log(`count:${count} / input : ${input}`); // 백틱? 파생효과.
  }, [count, input]); // 첫번째 인수 콜백함수. 두번째 인수 배열의 값이 바뀌게 되면 콜백함수에 있는 내용을 파생 효과로서 수행하게 됨
  // count가 변경될때마다(배열에 쓴 요소들) useEffect가 실행이 됨 => 의존성 배열 dependency array 혹은 deps라고 부르기도 함
  
  */

  // 이벤트 핸들러를 만들어서 얘만 주면 되니까!
  // value라는 매개변수로 받기. 숫자를 누를때 해당값을 받으려고
  const onClickButton = (value) => {
    setCount(count + value);
    // console.log(count);
    //  useEffect 말고 얘로 하면 안되나? 화면엔 100인데 콘솔엔 0 setCount로 했을댄 이미 바뀌었을텐데 왜 0인지..?
    // => 코드상으로보면 setCount(count + value)의 상태변화가 비동기로 동작 : 여기서 호출했지만 완료는 나중에 먼저 빨리 끝나는거 먼저 해버림
    // 그래서 console.log 먼저 찍어버림..;; 리액트의 state는 이렇게 되기때문에 sideEffect가 나중에.. 그래서 useEffect를 사용 . 얘는 그렇게 설계됨
  };

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input
          value={input}
          onChange={(e) => {
            // e를 꼭 써야함
            setInput(e.target.value);
          }}
        />
      </section>

      <section>
        <Viewer count={count} />
        {count % 2 === 0 ? <Even /> : null}
        {/* 짝수면 even, 아니면 보여줄 게 없으면 null */}
      </section>

      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  );
}

export default App;
