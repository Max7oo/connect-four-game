import Header from "../../components/header/header";
import Playboard from "../../components/playboard/playboard";
import PlayerOne from "../../components/playerone/playerone";
import PlayerTwo from "../../components/playertwo/playertwo";
import "./home.css";

function Home() {
  return (
    <>
      <Header />
      <main>
        <PlayerOne />
        <Playboard />
        <PlayerTwo />
      </main>
    </>
  );
}

export default Home;
