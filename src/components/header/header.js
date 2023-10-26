import "./header.css";

function Header() {
  return (
    <header>
      <button>MENU</button>
      <div className="logo">
        <div className="red" />
        <div className="yellow" />
        <div className="yellow" />
        <div className="red" />
      </div>
      <button>RESTART</button>
    </header>
  );
}

export default Header;
