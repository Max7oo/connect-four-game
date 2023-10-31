import "./header.css";

function Header({ setBoardMemory, setSeconds }) {
  const resetBoard = () => {
    setBoardMemory([
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
    ]);

    setSeconds(30);

    for (let i = 0; i < 42; i++) {
      document.getElementById(i).style.backgroundColor = "";
    }
  };
  return (
    <header>
      <button>MENU</button>
      <div className="logo">
        <div className="red" />
        <div className="yellow" />
        <div className="yellow" />
        <div className="red" />
      </div>
      <button onClick={() => resetBoard()}>RESTART</button>
    </header>
  );
}

export default Header;
