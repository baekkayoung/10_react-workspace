import "./Editor.css";
import EmotionItem from "./EmotionItem";
import Button from "./Button";
import { useState, useEffect } from "react";
import { emotionList } from "../util/constants";

import { useNavigate } from "react-router-dom";
import { getStringedDate } from "./../util/get-stringed-date";

// constatnt.js로 이동
// const emotionList = [
//   { emotionId: 1, emotionName: "완전 좋음" },
//   { emotionId: 2, emotionName: "좋음" },
//   { emotionId: 3, emotionName: "그럭저럭" },
//   { emotionId: 4, emotionName: "나쁨" },
//   { emotionId: 5, emotionName: "끔찍함" },
// ];

// 날짜 -> "YYYY-MM-DD"로 바꿔주는 함수!
// get-Stringed-date.js
// const getStringedDate = (targetDate) => {
//   // targetDate에는 날짜 객체
//   let year = targetDate.getFullYear();
//   let month = targetDate.getMonth() + 1;

//   let date = targetDate.getDate();
//   // 9일 -> 09일 :
//   if (month < 10) {
//     month = `0${month}`;
//   }
//   if (date < 10) {
//     date = `0${date}`;
//   }
//   return `${year}-${month}-${date}`;
// };

// initData 초기 데이터가 담겨있음
const Editor = ({ onSubmit, initData }) => {
  const nav = useNavigate();

  const [input, setInput] = useState({
    createdDate: new Date(),
    emotionId: 3,
    content: "",
  });

  // initData가 바뀔 대마다 useEffect가 발생.
  // input이란 state를 바꿔줌
  useEffect(() => {
    if (initData) {
      setInput({
        ...initData,
        createdDate: new Date(Number(initData.createdDate)),
      });
      // date가 new Date로 되어있어야하는데 initData에는 타임스탬프.. 바꿔주는 작업 ㄱㄱ
    }
  }, [initData]);

  const onClickSubmitButton = () => {
    onSubmit(input); // 사용자가 input에 입력한 정보 => new.jsx의 onSubmit()으로
  };

  const onChangeInput = (e) => {
    // 이벤트 객체 !!
    console.log(e.target.name); // 어떤 요소에 입력이 들어온 건지
    console.log(e.target.value); // 날짜가 문자열로 => value를 new Date(value)로 날짜로 변환
    // 어떤 값을 바꿨는지

    let name = e.target.name;
    let value = e.target.value;

    if (name === "createdDate") {
      // 날짜 파트
      value = new Date(value);
    }

    setInput({
      ...input, // 왜 먼저 바르지?
      //   [e.target.name]: e.target.value, // 문자열로 들어감
      [name]: value, // 날짜로 변환한 value 입력
    });
  };

  //   const emotionId = 1;
  return (
    <div className="Editor">
      <section className="date_section">
        <h4>오늘의 날짜</h4>
        <input
          name="createdDate"
          onChange={onChangeInput}
          value={getStringedDate(input.createdDate)}
          type="date"
        />
        {/* input.createdDate로 바로 x input의 value에는 문자열로 */}
      </section>
      <section className="emotion_section">
        <h4>오늘의 감정</h4>
        <div className="emotion_list_wrapper">
          {/* emotionList 배열을 가지고 map을 돌렸음. */}
          {emotionList.map((item) => (
            <EmotionItem
              onClick={() =>
                onChangeInput({
                  target: { name: "emotionId", value: item.emotionId },
                })
              }
              // onClick이 바로 안되냐고? 얘는 onClick을 단게 아니라 props를 직접 단거임 얘의 함수르 온체인지인풋함수를 넘겨준거임
              // 그냥 호출하면안됨 돔요소는 자동으로 줌 근데 얘는 자동으로 안주니까 객체를 직접 만들어야함 {}객체를  넘겨줌!
              // 객체에 target. 하던더.. 이벤트 객체에서 e.target. 하면서 target이라는 속성을 찾을거니까... 이것의 value를 객체를
              // => 가서 받아주자

              key={item.emotionId}
              {...item}
              isSelected={item.emotionId === input.emotionId} // emotionId=1 제외 모든 isSelected 값 : false
            />
            // 여기서 왜 ... item을 바르지?
          ))}
        </div>
      </section>
      <section className="content_section">
        <h4>오늘의 일기</h4>
        <textarea
          name="content"
          value={input.content}
          onChange={onChangeInput}
          placeholder="오늘은 어땠나요?"
        ></textarea>
      </section>
      <section className="button_section">
        <Button onClick={() => nav(-1)} text={"취소하기"} />
        <Button
          onClick={onClickSubmitButton}
          text={"작성완료"}
          type={"POSITIVE"}
        />
      </section>
    </div>
  );
};

export default Editor;
