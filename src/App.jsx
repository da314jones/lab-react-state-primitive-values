import { useState } from "react";
import "./App.css";

function App() {
  const [score, setScore] = useState(0);
  const [increment, setIncrement] = useState(1);

  const increaseScore = () => {
    setScore(score + increment);
  };

  const payPoints = () => {
    if (score < 10) {
      alert("You cant afford that!");
    } else {
      setScore(score - 10);
      setIncrement(increment + 1);
    }
  };
  const replayGame = () => {
    setScore(0);
    setIncrement(1);
  };

  return (
    <main>
      <h1>Current Score: {score}</h1>
      {score < 100 ? (
        <div>
          <button onClick={increaseScore}>+{increment}</button>
          <button onClick={payPoints}>
            Pay 10 points to change from +{increment} to +{increment + 1}
          </button>
        </div>
      ) : (
        <div>
          <h2>You Win!</h2>
          <button onClick={replayGame}>Play again?</button>
        </div>
      )}
      ;
    </main>
  );
}

export default App;
