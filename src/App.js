import React, { useState, useEffect } from 'react';

import './App.scss';
import Board from './components/Board/Board';
import AlphabetButtons from './components/AlphabetButtons/AlphabetButtons';
import puzzles from './puzzle.json';

function App() {
  const [currentPuzzle, setCurrentPuzzle] = useState("");

  useEffect(() => {
    setCurrentPuzzle(puzzles[Math.floor(Math.random() * puzzles.length)]);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Wheel of React!</h1>
        <Board currentPuzzle={currentPuzzle}/>
        <AlphabetButtons />
      </header>
    </div>
  );
}

export default App;
