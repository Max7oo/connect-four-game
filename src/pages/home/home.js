import { useState } from "react";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import Playboard from "../../components/playboard/playboard";
import PlayerOne from "../../components/player/playerone";
import PlayerTwo from "../../components/player/playertwo";
import "./home.css";

function Home() {
  const [player, setPlayer] = useState(1);

  return (
    <>
      <Header />
      <main>
        <PlayerOne setPlayer={setPlayer} />
        <Playboard player={player} setPlayer={setPlayer} />
        <PlayerTwo setPlayer={setPlayer} />
      </main>
      <Footer />
    </>
  );
}

export default Home;
