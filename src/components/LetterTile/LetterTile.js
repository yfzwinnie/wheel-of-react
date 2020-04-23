import React from 'react';
import './LetterTile.scss';

function LetterTile(props) {
    return <div className={`letter-tile ${props.letter && props.letter !== " " ? 'has-letter' : ''}`}>
        {props.shouldShowLetter ? props.letter : null}
    </div>
}

export default LetterTile;