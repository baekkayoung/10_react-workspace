import "./BookItem.css";

const BookItem = ({
  id,
  isfav,
  content,
  date,
  onUpdate,
  onReturn,
  onRenew,
}) => {
  const onChangeCheckBox = () => {
    onUpdate(id);
  };

  const onClickRenewButton = () => {
    onRenew(id);
  };
  const onClickReturnButton = () => {
    onReturn(id);
  };
  return (
    <div className="BookItem">
      <input
        className="star-checkbox"
        id={`fav-${id}`}
        onChange={onChangeCheckBox}
        checked={isfav}
        type="checkbox"
      />
      <label htmlFor={`fav-${id}`} className="star-label">
        ★
      </label>
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button onClick={onClickRenewButton}>연장</button>
      <button onClick={onClickReturnButton}>반납</button>
    </div>
  );
};

export default BookItem;
