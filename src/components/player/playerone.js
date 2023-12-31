import "./player.css";

import red from "../../images/red-smiley.svg";

function PlayerOne({ scoreOne }) {
  return (
    <div className="player one">
      <div className="smiley red">
        <img src={red} alt="red smiley" />
      </div>
      <div className="player-info">
        <h2>PLAYER 1</h2>
        <h1>{scoreOne}</h1>
      </div>
    </div>
  );
}

export default PlayerOne;
