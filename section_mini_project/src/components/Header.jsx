import "./Header.css";

const Header = ({ title, leftChild, rightchild }) => {
  return (
    <header className="Header">
      <div className="header_left">{leftChild}</div>
      <div className="header_center">{title}</div>
      <div className="header_right">{rightchild}</div>
    </header>
  );
};

export default Header;
