import "./winner.css";

import red from "../../images/red-smiley.svg";
import yellow from "../../images/yellow-smiley.svg";

function Winner({ winner, setWinner, setPlayer, setSeconds }) {
  return (
    <div className="winner">
      {winner === 1 ? (
        <div className="player one">
          <div className="smiley red">
            <img src={red} alt="red smiley" />
          </div>
          <div className="player-info">
            <h2>PLAYER {winner} HAS WON!</h2>
            <button
              className="red"
              onClick={() => {
                setWinner(0);
                setPlayer(2);
                setSeconds(30);
              }}
            >
              PLAY AGAIN
            </button>
          </div>
        </div>
      ) : (
        <></>
      )}
      {winner === 2 ? (
        <div className="player two">
          <div className="smiley yellow">
            <img src={yellow} alt="yellow smiley" />
          </div>
          <div className="player-info">
            <h2>PLAYER {winner} HAS WON!</h2>
            <button
              className="yellow"
              onClick={() => {
                setWinner(0);
                setPlayer(1);
                setSeconds(30);
              }}
            >
              PLAY AGAIN
            </button>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Winner;
