import { useState } from 'react'; // import the useState hook
import './App.css'; // import the CSS file
import MoleContainer from './components/MoleContainer'; // import the MoleContainer component
import SplashScreen from './components/SplashScreen'; // import the SplashScreen component

function App() {
  // define state variables using the useState hook
  const [gameStarted, setGameStarted] = useState(false);
  const [score, setScore] = useState(0);

  // define functions to handle various events
  const handleStartGame = () => {
    setGameStarted(true);
  };

  const handlePauseGame = () => {
    setGameStarted(false);
  };

  const handleResetGame = () => {
    setScore(0);
  };

  const handleDecrementScore = () => {
    setScore(score - 1);
  };

  // define a function that creates a grid of MoleContainers
  const createMoleHill = () => {
    let hills = [];
    for (let i = 0; i < 9; i++) {
      hills.push(<MoleContainer key={i} setScore={setScore} score={score} />);
    }
    return <div>{hills}</div>;
  };

  // the component returns some JSX
  return (
    <div className="App">
      <h1>React-A-Mole!</h1>
      <div>
        {/* if the game has started, show the game UI */}
        {gameStarted ? (
          <>
            <div>{score}</div>
            {createMoleHill()}
            <button onClick={handlePauseGame}>Pause</button>
            <button onClick={handleResetGame}>Reset</button>
            <button onClick={handleDecrementScore}>Decrement Score</button>
          </>
        ) : (
          // if the game has not started, show the SplashScreen component
          <SplashScreen startGame={handleStartGame} />
        )}
      </div>
    </div>
  );
}

export default App; // export the App component for use in other files
