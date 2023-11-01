import { useState } from "react";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import Playboard from "../../components/playboard/playboard";
import PlayerOne from "../../components/player/playerone";
import PlayerTwo from "../../components/player/playertwo";
import "./home.css";
import Winner from "../../components/winner/winner";
import Menu from "../../components/menu/menu";

function Home() {
  const [boardMemory, setBoardMemory] = useState([
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
  ]);
  const [player, setPlayer] = useState(1);
  const [seconds, setSeconds] = useState(30);
  const [scoreOne, setScoreOne] = useState(0);
  const [scoreTwo, setScoreTwo] = useState(0);
  const [winner, setWinner] = useState(0);
  const [menu, setMenu] = useState(false);

  return (
    <>
      <Header
        setMenu={setMenu}
        setBoardMemory={setBoardMemory}
        setSeconds={setSeconds}
      />
      <Menu menu={menu} setMenu={setMenu} />
      <main>
        <PlayerOne scoreOne={scoreOne} />
        <Playboard
          boardMemory={boardMemory}
          setBoardMemory={setBoardMemory}
          player={player}
          setPlayer={setPlayer}
          setSeconds={setSeconds}
          scoreOne={scoreOne}
          setScoreOne={setScoreOne}
          scoreTwo={scoreTwo}
          setScoreTwo={setScoreTwo}
          setWinner={setWinner}
        />
        <PlayerTwo scoreTwo={scoreTwo} />
      </main>
      <Footer
        player={player}
        setPlayer={setPlayer}
        seconds={seconds}
        setSeconds={setSeconds}
      />
      {winner !== 0 ? (
        <Winner
          winner={winner}
          setWinner={setWinner}
          setPlayer={setPlayer}
          setSeconds={setSeconds}
        />
      ) : (
        <></>
      )}
    </>
  );
}

export default Home;
