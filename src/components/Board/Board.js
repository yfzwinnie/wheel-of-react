import React from 'react';
import LetterTile from '../LetterTile/LetterTile';
import './Board.scss';

const invalidTiles = []
function Board({ currentPuzzle }) {

    const puzzleObject = currentPuzzle.split('').reduce((acc, curr) => {
        acc[Object.keys(acc).length + 13] = { letter: curr, isGuessed: false };
        return acc;
    }, {})

    console.log(puzzleObject);

    function getIndexOffset(rowIndex) {
        const offsets = {
            0: 0,
            1: 12,
            2: 26,
            3: 40,
        }

        return offsets[rowIndex];
    }

    function renderBoard() {
        return (
            [
                new Array(12).fill(null),
                new Array(14).fill(null),
                new Array(14).fill(null),
                new Array(12).fill(null)
            ]
            .map((boardRow, rowIndex) => {
                return (
                    <div className="board-row">
                        {
                            boardRow
                                .map((tileSpot, tileIndex) => (
                                    <LetterTile
                                        letter={puzzleObject[tileIndex + getIndexOffset(rowIndex)]}
                                    />
                                    )
                                )
                        }
                    </div>
                )
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