import { useRef, useState } from "react";

// 간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개
const Register = () => {
  /*const [name, setName] = useState(""); /* input을 건들 때마다 -> onchange 
    const [birth, setBirth] = useState("");
    const [country, setCountry] = useState("");
    const [bio, setBio] = useState("");*/

  /*
  const onChangeName = (e) => {
    console.log(e);
    setName(e.target.value);
  };

  const onChangeBirth = (e) => {
    setBirth(e.target.value);
  };

  const onChangeCountry = (e) => {
    setCountry(e.target.value);
  };

  const onChangeBio = (e) => {
    setBio(e.target.value);
  }; */

  // 여러개를 받을 거니까 객체를 생성
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  }); // state ref는 초기화가 되지 않도록 함. 일반 변수는 초기화가됨

  const countRef = useRef(0); // 리렌더링이 되지 않음! 그래서 0으로 변하지 않고 숫자가 올라감 console 확인
  const inputRef = useRef();
  // let count = 0; // count ++ 하면 안되나?

  const onChange = (e) => {
    countRef.current++;
    // count++;
    console.log(countRef.current); // 변경시 1씩 증가
    // console.log(count); // count ++ 안됨. 계속 1임 리렌더링이 되니까 0으로 초기화, 다시 버튼 -> 1 다시 초기화
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const onsubmit = () => {
    if (input.name === "") {
      // 이름을 입력하는 DOM 요소 포커스
      //   console.log(inputRef.current);
      //   <input placeholder="이름" value="" name="name"></input>
      inputRef.current.focus();
    } else {
    }
  };

  //   const refObj = useRef(0); // current 초기값이 0으로, 얘도 객체임
  //   console.log(refObj.currnet + " Register 렌더링!!");
  // 이게 찍히면 리렌더라는 의미인데 ref+1를 눌렀을때는 안 뜨고 다른거 변경하면 뜸
  //   {current: undefined}current: undefined[[Prototype]]: Object

  //   console.log(input);

  /*const onChange = (e) => {
    // console.log(e.target.name, e.target.value);
    setInput({
      ...input,
      [e.target.name]: e.target.value,
      // name값을 넘겨줘서 동적으로 설정 => name 값 달아주기
    });
  };*/

  //   console.log(input);

  /*
  const onChangeName = (e) => {
    setInput({
      ...input,
      name: e.target.value,
    });
  };

  const onChangeBirth = (e) => {
    setInput({
      ...input,
      birth: e.target.value,
    });
  };

  const onChangeCountry = (e) => {
    setInput({
      ...input,
      country: e.target.value,
    });
  };

  const onChangeBio = (e) => {
    setInput({
      ...input,
      bio: e.target.value,
    });
  };*/

  return (
    <div>
      {/*
      <button
        onClick={() => {
          refObj.current++;
          console.log(refObj.current);
        }}
      >
        ref + 1
      </button> */}

      <div>
        <input
          ref={inputRef}
          name="name"
          value={input.name}
          onChange={onChange}
          placeholder={"이름"}
        />
        {/* 중괄호 내부에 */}
        {/* {name} 작성시마다 바뀌는지 확인 */}
      </div>

      <div>
        <input
          name="birth"
          value={input.birth}
          onChange={onChange}
          type="date"
        />
        {/* {birth} */}
      </div>

      <div>
        <select name="country" value={input.country} onChange={onChange}>
          <option value={""}></option>
          <option value={"kr"}>한국</option>
          <option value={"us"}>미국</option>
          <option value={"uk"}>영국</option>
        </select>
        {/* {country} */}
      </div>

      <div>
        <textarea name="bio" value={input.bio} onChange={onChange} />
        {/* {bio} */}
      </div>

      <button onClick={onsubmit}>제출</button>
    </div>
  );
};

export default Register;
