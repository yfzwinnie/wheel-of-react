import React from 'react'

import './AlphabetButtons.scss'

const alphabetArray = 'abcdefghijklmnopqrstuvwxyz'.split('');

export default function AlphabetButtons() {

  return (
    <div className="alphabet-buttons-container">
      {alphabetArray.map(letter => <button key={letter}>{letter}</button>)}
    </div>
  )
}
