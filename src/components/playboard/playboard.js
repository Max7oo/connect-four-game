import { useEffect, useState } from "react";
import "./playboard.css";

function Playboard({ player, setPlayer }) {
  const [boardMemory] = useState([
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
  ]);

  const divArr = [];
  const createBoardCells = () => {
    for (let i = 0; i < 42; i++) {
      const div = document.createElement("div");
      divArr.push(div);
    }
    return divArr;
  };

  const handlePlayerMove = (player, column) => {
    for (let i = 0; i < boardMemory[column].length; i++) {
      if (boardMemory[column][boardMemory[column].length - 1] === 0) {
        boardMemory[column][boardMemory[column].length - 1] = player;
        chipAdded(player, column, boardMemory[column].length - i - 1);
        player === 1 ? setPlayer(2) : setPlayer(1);
        console.log(boardMemory[column]);
        return boardMemory;
      } else if (boardMemory[column][i] === 1 || boardMemory[column][i] === 2) {
        boardMemory[column][i - 1] = player;
        chipAdded(player, column, i - 1);
        player === 1 ? setPlayer(2) : setPlayer(1);
        console.log(boardMemory[column]);
        return boardMemory;
      }
    }
  };

  const chipAdded = (player, column, index) => {
    if (index >= 0) {
      if (player === 1) {
        let indexToChange = column + index * 7;
        // column_index * total_rows + item_index_in_column
        const divToChange = document.getElementById(indexToChange);
        divToChange.style.backgroundColor = "var(--red-player)";
      } else if (player === 2) {
        let indexToChange = column + index * 7;
        const divToChange = document.getElementById(indexToChange);
        divToChange.style.backgroundColor = "var(--yellow-player)";
      }
    } else {
      console.log("Not possible");
    }
  };

  useEffect(() => {
    hasFourInARow(player);
  });

  function hasFourInARow(player) {
    if (player === 1) {
      boardMemory.forEach((arr) => {
        let count = 0;
        for (let i = 0; i < arr.length; i++) {
          if (arr[i] === 1) {
            count++;
            if (count === 4) {
              console.log("Player " + player + " wins");
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
              console.log("Player " + player + " wins");
            }
          } else {
            count = 0;
          }
        }
        return false;
      });
    }
  }

  return (
    <div className="playboard">
      {createBoardCells().map((_, index) => {
        return (
          <div
            key={index}
            id={index}
            className="cell"
            onClick={() => handlePlayerMove(player, index % 7)}
          ></div>
        );
      })}
    </div>
  );
}

export default Playboard;
