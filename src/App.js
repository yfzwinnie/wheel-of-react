import React, { useState } from 'react';

import './App.scss';
import Board from './components/Board/Board';
import AlphabetButtons from './components/AlphabetButtons/AlphabetButtons';
import SpinZone from './components/SpinZone/SpinZone';

import puzzles from './puzzle.json';

const wheelValues = [100, 200, 300, 400, 500, 600, 700, 800, 1000]

function App() {
  function getRandomPuzzle() {
    return puzzles[Math.floor(Math.random() * puzzles.length)]
  }

  const [currentPuzzle] = useState(() => getRandomPuzzle());
  const [guesses, setGuesses] = useState([]);
  const [spinValue, setSpinValue] = useState(0);

  function handleGuess(guess) {
    setGuesses([...guesses, guess])
  }

  function handleSpin() {
    let newValue =  wheelValues[Math.floor(Math.random() * wheelValues.length)]
    setSpinValue(newValue);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Wheel of React!</h1>
        <Board puzzle={currentPuzzle} guesses={guesses} />
        <SpinZone handleSpin={handleSpin} spinValue={spinValue} />
        <AlphabetButtons handleGuess={handleGuess} guesses={guesses} />
      </header>
    </div>
  );
}

export default App;
