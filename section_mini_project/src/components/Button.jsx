import "./Button.css";

const Button = ({ onClick, type, text }) => {
  return (
    <button onClick={onClick} className={`Button Button_${type}`}>
      {text}
    </button>
  );
};
export default Button;
