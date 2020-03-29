import React from 'react';
import LetterTile from '../LetterTile/LetterTile';
import './Board.scss';

function Board(props) {
    function renderBoard() {
        return (
            [
                new Array(12).fill(null),
                new Array(14).fill(null),
                new Array(14).fill(null),
                new Array(12).fill(null)
            ]
            .map((boardRow) => {
                return (<div className="board-row">
                    {boardRow.map(() => <LetterTile />)}
                </div>)
            })
        );
    };
    
    return (
        <div className="board">
            {renderBoard()}
        </div>
    );
}

export default Board;