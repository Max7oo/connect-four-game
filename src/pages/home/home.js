import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import Playboard from "../../components/playboard/playboard";
import PlayerOne from "../../components/player/playerone";
import PlayerTwo from "../../components/player/playertwo";
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
      <Footer />
    </>
  );
}

export default Home;
