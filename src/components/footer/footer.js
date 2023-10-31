import { useEffect } from "react";
import "./footer.css";

function Footer({player, setPlayer, seconds, setSeconds}) {

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(prev => prev - 1);
      } else if (seconds === 0) {
        player === 1 ? setPlayer(2) : setPlayer(1);
        setSeconds(30)
      }
    }, 1000);


    return () => clearInterval(interval);
  }, [player, seconds, setPlayer, setSeconds]);

  return (
    <footer>
      {player === 1 ? <div className="turn one">
        <h3>PLAYER {player}'S TURN</h3>
        <h1>{seconds}s</h1>
      </div> : <div className="turn two">
        <h3>PLAYER {player}'S TURN</h3>
        <h1>{seconds}s</h1>
      </div>}
      
    </footer>
  );
}

export default Footer;
