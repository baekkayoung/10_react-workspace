import { useRef, useState } from "react";

const Order = () => {
  const [input, setInput] = useState({
    name: "",
    pizza: "",
    quantity: "",
    ask: "",
  });

  const inputRef = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onChange = (e) => {
    // console.log(e.target.name, e.target.value);
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const onsubmit = () => {
    const { name, pizza, quantity, ask } = input;

    if (!name || !pizza || !quantity || !ask) {
      alert("모든 항목을 입력해주세요!");
      return;
    }
    alert("주문 완료!");
    console.log("최종 주문:", input);

    setIsSubmitted(true);
  };

  //   // if문
  //   let orderResult = null;
  //   if (isSubmitted) {
  //     orderResult = (
  //       <div>
  //         <h3>주문 결과</h3>
  //         <div>주문자 : {input.name}</div>
  //         <div>
  //           주문한 피자 : {input.pizza} ({input.quantity} 판)
  //         </div>
  //         <div>요청사항 : {input.ask}</div>
  //       </div>
  //     );
  //   }

  return (
    <div>
      <div>
        <input
          type="text"
          name="name"
          value={input.name}
          placeholder={"이름"}
          onChange={onChange}
        />
      </div>

      <div>
        <input
          name="pizza"
          type="radio"
          value={"cheese"}
          checked={input.pizza === "cheese"}
          onChange={onChange}
        />
        치즈피자
        <input
          name="pizza"
          type="radio"
          value={"pepperoni"}
          checked={input.pizza === "pepperoni"}
          onChange={onChange}
        />
        페퍼로니피자
        <input
          name="pizza"
          type="radio"
          value={"hawaiian"}
          checked={input.pizza === "hawaiian"}
          onChange={onChange}
        />
        하와이안피자
      </div>

      <div>
        <input
          name="quantity"
          type="number"
          placeholder={"수량"}
          onChange={onChange}
          value={input.quantity}
        />{" "}
      </div>

      <div>
        <textarea name="ask" value={input.ask} onChange={onChange}></textarea>
      </div>

      <button onClick={onsubmit}>주문하기</button>

      {/* if문으로 결정된 JSX 변수 출력 */}
      {/* {orderResult} */}

      {isSubmitted && (
        <div>
          <h3>주문 결과</h3>
          <div>주문자 : {input.name}</div>
          <div>
            주문한 피자 : {input.pizza} ({input.quantity} 판)
          </div>
          <div>요청사항 : {input.ask}</div>
        </div>
      )}
    </div>
  );
};

export default Order;
