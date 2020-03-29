import React from 'react';
import './LetterTile.scss';

function LetterTile(props) {
    return <div className={`letter-tile ${props.letter ? 'has-letter' : ''}`}>
        {props.letter}
    </div>
}

export default LetterTile;