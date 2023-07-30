import React from "react";
import "./App.css";

function App () {

  const [score, setScore] = useState(0);
  const [increment, setIncrement] = useState(1);

  const increaseScore = () => {
    setScore(score + increment);
  }

  const increaseIncrement = () => {
    if(score >= 10) {
      setIncrement(increment + 1);
    }
  }

    return (
      <main>
        <h1>Current Score:</h1> 
        <button onClick={increaseScore}>+{increment}</button>
        <button onClick={payPoints}>Pay 10 points to change from X to X+1</button>
      </main>
    );
}

export default App;