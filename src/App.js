import React, { useState } from 'react';

import './App.scss';
import Board from './components/Board/Board';
import AlphabetButtons from './components/AlphabetButtons/AlphabetButtons';
import puzzles from './puzzle.json';

function App() {
  function getRandomPuzzle() {
    return puzzles[Math.floor(Math.random() * puzzles.length)]
  }

  const [currentPuzzle] = useState(() => getRandomPuzzle());
  const [guesses, setGuesses] = useState([]);

  function handleGuess(guess) {
    setGuesses([...guesses, guess])
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Wheel of React!</h1>
        <Board puzzle={currentPuzzle} guesses={guesses} />
        <AlphabetButtons handleGuess={handleGuess} guesses={guesses} />
      </header>
    </div>
  );
}

export default App;
