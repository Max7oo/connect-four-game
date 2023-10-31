import { useState } from "react";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import Playboard from "../../components/playboard/playboard";
import PlayerOne from "../../components/player/playerone";
import PlayerTwo from "../../components/player/playertwo";
import "./home.css";

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

  return (
    <>
      <Header setBoardMemory={setBoardMemory} setSeconds={setSeconds} />
      <main>
        <PlayerOne setPlayer={setPlayer} scoreOne={scoreOne} />
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
        />
        <PlayerTwo setPlayer={setPlayer} scoreTwo={scoreTwo} />
      </main>
      <Footer
        player={player}
        setPlayer={setPlayer}
        seconds={seconds}
        setSeconds={setSeconds}
      />
    </>
  );
}

export default Home;
