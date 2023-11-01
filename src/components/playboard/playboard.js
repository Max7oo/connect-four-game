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
  setWinner,
}) {
  const boardCells = [];
  const markers = [];
  const [marker, setMarker] = useState(100);

  // create 42 divs for 42 positions on the board.
  const createBoardCells = () => {
    for (let i = 0; i < 42; i++) {
      const div = document.createElement("div");
      boardCells.push(div);
    }
    return boardCells;
  };

  // create 7 divs for the 7 markers on top of the board.
  const createMarkers = () => {
    for (let i = 0; i < 7; i++) {
      const div = document.createElement("div");
      markers.push(div);
    }
    return markers;
  };

  // onMouseOver show the marker above the corresponding column.
  const showMarker = (column) => {
    // column is the number of the column (0 to 6) + 100 for unique ids.
    setMarker(column);
    // if the column has the same id of the current marker, keep the marker visible.
    if (column === marker) {
      document.getElementById(column).style.visibility = "visible";
    }
    // else set the new column marker on visible and hide the old one.
    else {
      document.getElementById(column).style.visibility = "visible";
      document.getElementById(marker).style.visibility = "hidden";
    }
  };

  // when the player clicks on one of the cells inside of the boardCells array, handle the player move using the player id and column id.
  const handlePlayerMove = (player, column) => {
    // loop through the column array
    for (let i = 0; i < boardMemory[column].length; i++) {
      // if the last number of the array is 0 (an empty cell).
      if (boardMemory[column][boardMemory[column].length - 1] === 0) {
        // replace it with the id of the player.
        boardMemory[column][boardMemory[column].length - 1] = player;
        // send the player id, column id and the index of the last cell in the array to chipAdded().
        chipAdded(player, column, boardMemory[column].length - 1);
        return boardMemory;
      }
      // else if the number is not 0, so either 1 or 2.
      else if (boardMemory[column][i] === 1 || boardMemory[column][i] === 2) {
        // go one cell up and replace the 0 with the id of the player.
        boardMemory[column][i - 1] = player;
        // send the player id, column id and the index of the changed cell to chipAdded().
        chipAdded(player, column, i - 1);
        return boardMemory;
      }
    }
  };

  // when a player did a move a visual chip needs to be added to the corresponding changed cell.
  const chipAdded = (player, column, index) => {
    // only add a chip if the index is 0 or higher, we don't want to go negative because these cells don't exist.
    if (index >= 0) {
      // check which player is adding the chip.
      if (player === 1) {
        // find the id of the cell to change in the boardCells array.
        let indexToChange = column + index * 7;
        // get the div by the id.
        const divToChange = document.getElementById(indexToChange);
        // change the background of that div to the player color.
        divToChange.style.backgroundColor = "var(--red-player)";
        // do some checks to determine if the player has won.
        hasFourHorizontal(player);
        hasFourVertical(player);
        hasFourDiagonal(player);
        // change the turn to the next player.
        player === 1 ? setPlayer(2) : setPlayer(1);
        // reset the timer.
        setSeconds(30);
      } else if (player === 2) {
        let indexToChange = column + index * 7;
        const divToChange = document.getElementById(indexToChange);
        divToChange.style.backgroundColor = "var(--yellow-player)";
        hasFourHorizontal(player);
        hasFourVertical(player);
        hasFourDiagonal(player);
        player === 1 ? setPlayer(2) : setPlayer(1);
        setSeconds(30);
      }
    }
    // if the index in the array is negative, don't add a chip because there's no according cell on the board.
    else {
      console.log("Not possible");
    }
  };

  // check if there are 4 chips in a row horizontally.
  const hasFourHorizontal = (player) => {
    // check which player placed the chip.
    if (player === 1) {
      // for every index in the array.
      for (let i = 0; i < boardMemory[0].length; i++) {
        // loop through the next 4 columns
        for (let j = 0; j < 4; j++) {
          // and check if 4 columns in a row hold the same player id on the same index.
          if (
            boardMemory[j][i] === 1 &&
            boardMemory[j + 1][i] === 1 &&
            boardMemory[j + 2][i] === 1 &&
            boardMemory[j + 3][i] === 1
          ) {
            // if so add 1 point to the old score and reset the board.
            setWinner(player);
            const newScore = scoreOne + 1;
            setScoreOne(newScore);
            resetBoard();
          }
        }
      }
    } else if (player === 2) {
      for (let i = 0; i < boardMemory[0].length; i++) {
        for (let j = 0; j < 4; j++) {
          if (
            boardMemory[j][i] === 2 &&
            boardMemory[j + 1][i] === 2 &&
            boardMemory[j + 2][i] === 2 &&
            boardMemory[j + 3][i] === 2
          ) {
            setWinner(player);
            const newScore = scoreTwo + 1;
            setScoreTwo(newScore);
            resetBoard();
          }
        }
      }
    }
  };

  // check if there are 4 chips in a row vertically.
  const hasFourVertical = (player) => {
    // check which player placed the chip.
    if (player === 1) {
      // for each column (array) on the board.
      boardMemory.forEach((arr) => {
        let count = 0;
        // loop through the column.
        for (let i = 0; i < arr.length; i++) {
          // and check if the index holds the player id.
          if (arr[i] === 1) {
            // if so add 1 to the count.
            count++;
            // if the count hits 4, there are 4 indexes in that column in a row with the same player id.
            if (count === 4) {
              // if so add 1 point to the old score and reset the board.
              setWinner(player);
              const newScore = scoreOne + 1;
              setScoreOne(newScore);
              resetBoard();
            }
          }
          // else reset the count
          else {
            count = 0;
          }
        }
      });
    } else if (player === 2) {
      boardMemory.forEach((arr) => {
        let count = 0;
        for (let i = 0; i < arr.length; i++) {
          if (arr[i] === 2) {
            count++;
            if (count === 4) {
              setWinner(player);
              const newScore = scoreTwo + 1;
              setScoreTwo(newScore);
              resetBoard();
            }
          } else {
            count = 0;
          }
        }
      });
    }
  };

  // check if there are 4 chips in a row diagonally.
  const hasFourDiagonal = (player) => {
    // check which player placed the chip.
    if (player === 1) {
      // for every index in the array.
      for (let i = 0; i < boardMemory[0].length; i++) {
        // loop through the next 4 columns (array).
        for (let j = 0; j < 4; j++) {
          // and check if 4 columns in a row hold the same player id on the same index, but everytime 1 index higher or lower.
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
            // if so add 1 point to the old score and reset the board.
            setWinner(player);
            const newScore = scoreOne + 1;
            setScoreOne(newScore);
            resetBoard();
          }
        }
      }
    } else if (player === 2) {
      for (let i = 0; i < boardMemory[0].length; i++) {
        for (let j = 0; j < 4; j++) {
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
            setWinner(player);
            const newScore = scoreTwo + 1;
            setScoreTwo(newScore);
            resetBoard();
          }
        }
      }
    }
  };

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
