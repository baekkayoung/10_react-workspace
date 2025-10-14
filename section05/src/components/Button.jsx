const Button = ({ children, text, color = "black" }) => {
  //   console.log(props);

  // 이벤트 핸들러
  const onClickButton = (e) => {
    console.log(e);
    console.log(text);
  };
  return (
    <button
      onClick={onClickButton}
      //   onMouseEnter={onClickButton}
      style={{ color: color }}
    >
      {text} - {color.toUpperCase()}
      {children}
    </button>
  );
};

export default Button;
