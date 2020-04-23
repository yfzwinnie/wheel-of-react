import React from 'react';
import './LetterTile.scss';

function LetterTile({ letter, isGuessed}) {
    return <div className={`letter-tile ${letter && letter !== " " ? 'has-letter' : ''}`}>
        {isGuessed ? letter : null}
    </div>
}

export default LetterTile;