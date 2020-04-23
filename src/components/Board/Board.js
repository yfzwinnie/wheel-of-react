import React from 'react';

import LetterTile from '../LetterTile/LetterTile';
import './Board.scss';

const boardTemplate = [
    [null, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, null],
    [null, null, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, null, null],
    [null, null, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, null, null],
    [null, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, null],
]

function Board({ puzzle, guesses }) {
    let puzzleArray = [...puzzle.toUpperCase()];

    function renderBoardRow(boardRow) {
        return (
            boardRow
                .map((tileSpot, tileIndex) => {
                    const letter = puzzleArray[0];
                    // TODO: extract to isValidTileSpot function
                    if (tileSpot === null || !letter) {
                        return (
                            <LetterTile
                                key={tileIndex}
                            />
                        )
                    }

                    puzzleArray = [...puzzleArray.slice(1)]

                    return (
                        <LetterTile
                            key={tileIndex}
                            letter={letter}
                            isGuessed={guesses.indexOf(letter.toLowerCase()) > -1}
                        />
                    )
                })
        )
    }

    function renderBoard() {
        return (
           boardTemplate
            .map((boardRow, rowIndex) => {
                return (
                    <div key={rowIndex} className="board-row">
                        {
                            renderBoardRow(boardRow)
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