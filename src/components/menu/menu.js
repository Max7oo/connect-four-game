import "./menu.css";

function Menu({ menu, setMenu }) {
  return (
    <>
      {menu ? (
        <div className="menu">
          <div className="menu-modal">
            <button onClick={() => setMenu(false)}>CLOSE MENU</button>
            <button>PLAYER VS PLAYER</button>
            <button>PLAYER VS COMPUTER</button>
            <button>GAME RULES</button>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default Menu;
