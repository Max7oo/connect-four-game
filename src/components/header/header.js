import "./header.css";

function Header({ setMenu, setBoardMemory, setSeconds }) {
  // reset the board to play again.
  const resetBoard = () => {
    // set the boardMemory to 0s (empty cells).
    setBoardMemory([
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
    ]);
    // reset the timer.
    setSeconds(30);
    // change the background color of all the cells to transparent.
    for (let i = 0; i < 42; i++) {
      document.getElementById(i).style.backgroundColor = "";
    }
  };

  return (
    <header>
      <button onClick={() => setMenu(true)}>MENU</button>
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
