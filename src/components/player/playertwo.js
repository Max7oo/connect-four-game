import "./player.css";

import yellow from "../../images/yellow-smiley.svg";

function PlayerTwo() {
  return (
    <div className="player two">
      <div className="smiley yellow">
        <img src={yellow} alt="yellow smiley" />
      </div>
      <div className="player-info">
        <h2>PLAYER 2</h2>
        <h1>0</h1>
      </div>
    </div>
  );
}

export default PlayerTwo;
