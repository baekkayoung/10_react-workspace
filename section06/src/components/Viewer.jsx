const Viewer = ({ count }) => {
  // props로 보낸 게  객체로 옴
  return (
    <div>
      <div>현재 카운트 : </div>
      <h1>{count}</h1>
    </div>
  );
};

export default Viewer;
