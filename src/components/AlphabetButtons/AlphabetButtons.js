import React from 'react'

import './AlphabetButtons.scss'

const alphabetArray = 'abcdefghijklmnopqrstuvwxyz'.split('');

export default function AlphabetButtons({ handleGuess, guesses }) {

  return (
    <div className="alphabet-buttons-container">
      {
      alphabetArray.map(letter => (
        <button
          key={letter}
          onClick={() => handleGuess(letter)}
          disabled={guesses.indexOf(letter) > -1}
        >
          {letter}
        </button>
      ))
      }
    </div>
  )
}
