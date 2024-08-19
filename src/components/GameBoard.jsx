import { useState } from "react";

export default function GameBoard( {changeActivePlayer, board}) {
    
    return <ol id="game-board">
        {board.map((row, rowIndex) => <li key={rowIndex}>
            <ol>
                {row.map((playerSymbol, colIndex) => 
                <li key={colIndex}>
                    <button onClick={() => changeActivePlayer(rowIndex, colIndex)} disabled={playerSymbol !== null}>{playerSymbol}</button>
                </li>)}
            </ol>
        </li>)}
    </ol>
}