const Box = ({ color }) => {
  return (
    <div
      style={{
        width: "100px",
        height: "100px",
        backgroundColor: color,
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "10px",
        marginTop: "20px",
      }}
    >
      {color} Box
    </div>
  );
};

export default Box;
