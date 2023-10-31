import { useState } from "react";
import "./playboard.css";
import markerred from "../../images/marker-red.svg";
import markeryellow from "../../images/marker-yellow.svg";

function Playboard({
  boardMemory,
  setBoardMemory,
  player,
  setPlayer,
  setSeconds,
  scoreOne,
  setScoreOne,
  scoreTwo,
  setScoreTwo,
}) {
  const boardCells = [];
  const markers = [];
  const [marker, setMarker] = useState(100);

  const createBoardCells = () => {
    for (let i = 0; i < 42; i++) {
      const div = document.createElement("div");
      boardCells.push(div);
    }
    return boardCells;
  };

  const createMarkers = () => {
    for (let i = 0; i < 7; i++) {
      const div = document.createElement("div");
      markers.push(div);
    }
    return markers;
  };

  const showMarker = (column) => {
    setMarker(column);
    if (column === marker) {
      document.getElementById(column).style.visibility = "visible";
    } else {
      document.getElementById(column).style.visibility = "visible";
      document.getElementById(marker).style.visibility = "hidden";
    }
  };

  const handlePlayerMove = (player, column) => {
    for (let i = 0; i < boardMemory[column].length; i++) {
      if (boardMemory[column][boardMemory[column].length - 1] === 0) {
        boardMemory[column][boardMemory[column].length - 1] = player;
        chipAdded(player, column, boardMemory[column].length - i - 1);
        player === 1 ? setPlayer(2) : setPlayer(1);
        setSeconds(30);
        return boardMemory;
      } else if (boardMemory[column][i] === 1 || boardMemory[column][i] === 2) {
        boardMemory[column][i - 1] = player;
        chipAdded(player, column, i - 1);
        player === 1 ? setPlayer(2) : setPlayer(1);
        setSeconds(30);
        return boardMemory;
      }
    }
  };

  const chipAdded = (player, column, index) => {
    if (index >= 0) {
      if (player === 1) {
        let indexToChange = column + index * 7;
        const divToChange = document.getElementById(indexToChange);
        divToChange.style.backgroundColor = "var(--red-player)";
        hasFourHorizontal(player);
        hasFourVertical(player);
        hasFourDiagonal(player);
      } else if (player === 2) {
        let indexToChange = column + index * 7;
        const divToChange = document.getElementById(indexToChange);
        divToChange.style.backgroundColor = "var(--yellow-player)";
        hasFourHorizontal(player);
        hasFourVertical(player);
        hasFourDiagonal(player);
      }
    } else {
      console.log("Not possible");
    }
  };

  const hasFourHorizontal = (player) => {
    if (player === 1) {
      for (let i = 0; i < boardMemory[0].length; i++) {
        for (let j = 0; j < boardMemory.length - 3; j++) {
          if (
            boardMemory[j][i] === 1 &&
            boardMemory[j + 1][i] === 1 &&
            boardMemory[j + 2][i] === 1 &&
            boardMemory[j + 3][i] === 1
          ) {
            const newScore = scoreOne + 1;
            setScoreOne(newScore);
            resetBoard();
          }
        }
      }
    } else if (player === 2) {
      for (let i = 0; i < boardMemory[0].length; i++) {
        for (let j = 0; j < boardMemory.length - 3; j++) {
          if (
            boardMemory[j][i] === 2 &&
            boardMemory[j + 1][i] === 2 &&
            boardMemory[j + 2][i] === 2 &&
            boardMemory[j + 3][i] === 2
          ) {
            const newScore = scoreTwo + 1;
            setScoreTwo(newScore);
            resetBoard();
          }
        }
      }
    }
  };

  const hasFourVertical = (player) => {
    if (player === 1) {
      boardMemory.forEach((arr) => {
        let count = 0;
        for (let i = 0; i < arr.length; i++) {
          if (arr[i] === 1) {
            count++;
            if (count === 4) {
              const newScore = scoreOne + 1;
              setScoreOne(newScore);
              resetBoard();
            }
          } else {
            count = 0;
          }
        }
        return false;
      });
    } else if (player === 2) {
      boardMemory.forEach((arr) => {
        let count = 0;
        for (let i = 0; i < arr.length; i++) {
          if (arr[i] === 2) {
            count++;
            if (count === 4) {
              const newScore = scoreTwo + 1;
              setScoreTwo(newScore);
              resetBoard();
            }
          } else {
            count = 0;
          }
        }
        return false;
      });
    }
  };

  const hasFourDiagonal = (player) => {
    if (player === 1) {
      for (let i = 0; i < boardMemory[0].length; i++) {
        for (let j = 0; j < boardMemory.length - 3; j++) {
          if (
            (boardMemory[j][i] === 1 &&
              boardMemory[j + 1][i + 1] === 1 &&
              boardMemory[j + 2][i + 2] === 1 &&
              boardMemory[j + 3][i + 3] === 1) ||
            (boardMemory[j][i] === 1 &&
              boardMemory[j + 1][i - 1] === 1 &&
              boardMemory[j + 2][i - 2] === 1 &&
              boardMemory[j + 3][i - 3] === 1)
          ) {
            const newScore = scoreOne + 1;
            setScoreOne(newScore);
            resetBoard();
          }
        }
      }
    } else if (player === 2) {
      for (let i = 0; i < boardMemory[0].length; i++) {
        for (let j = 0; j < boardMemory.length - 3; j++) {
          if (
            (boardMemory[j][i] === 2 &&
              boardMemory[j + 1][i + 1] === 2 &&
              boardMemory[j + 2][i + 2] === 2 &&
              boardMemory[j + 3][i + 3] === 2) ||
            (boardMemory[j][i] === 2 &&
              boardMemory[j + 1][i - 1] === 2 &&
              boardMemory[j + 2][i - 2] === 2 &&
              boardMemory[j + 3][i - 3] === 2)
          ) {
            console.log(player + "succes");
            const newScore = scoreTwo + 1;
            setScoreTwo(newScore);
            resetBoard();
          }
        }
      }
    }
  };

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
    <div className="playboard">
      <div className="markers">
        {createMarkers().map((_, index) => {
          return (
            <div key={index} className="marker">
              {player === 1 ? (
                <img id={index + 100} src={markerred} alt="marker red" />
              ) : (
                <img id={index + 100} src={markeryellow} alt="marker yellow" />
              )}
            </div>
          );
        })}
      </div>
      <div className="cells">
        {createBoardCells().map((_, index) => {
          return (
            <div
              key={index}
              id={index}
              className="cell"
              onClick={() => handlePlayerMove(player, index % 7)}
              onMouseOver={() => showMarker((index % 7) + 100)}
            ></div>
          );
        })}
      </div>
    </div>
  );
}

export default Playboard;
