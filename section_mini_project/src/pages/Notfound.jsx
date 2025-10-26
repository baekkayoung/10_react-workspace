const Notfound = ({ onNavigate }) => {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "100px 20px",
        color: "#4A7C59",
      }}
    >
      <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>404</h1>
      <p style={{ fontSize: "24px", marginBottom: "30px" }}>
        페이지를 찾을 수 없습니다
      </p>
    </div>
  );
};

export default Notfound;
