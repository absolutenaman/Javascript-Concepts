// KnightChessboard.js
import React, { useState } from "react";

const BOARD_SIZE = 8;


const getKnightMoves = (row, col) => {
    document.getElementById(`cell-${row}-${col}`).className = "selected-square";
    const moves = [[1, 2], [-1, 2], [1, -2], [-1, -2], [2, 1], [-2, 1], [2, -1], [-2, -1]]
    for (let i = 0; i < moves.length; i++) {
        if (((row + moves[i][0]) >= 0 && (row + moves[i][0]) < 8) && ((col + moves[i][1]) >= 0 && (col + moves[i][1]) < 8)) {
            document.getElementById(`cell-${row + moves[i][0]}-${col + moves[i][1]}`).className = 'knight-move-target';
        }
    }
}
const outHandler = (row, col) => {
    const isLights = (row + col) % 2 === 0;

    document.getElementById(`cell-${row}-${col}`).className = `cell ${isLights ? "light-square" : "dark-square"}`;
    const moves = [[1, 2], [-1, 2], [1, -2], [-1, -2], [2, 1], [-2, 1], [2, -1], [-2, -1]]
    for (let i = 0; i < moves.length; i++) {
        if (((row + moves[i][0]) >= 0 && (row + moves[i][0]) < 8) && ((col + moves[i][1]) >= 0 && (col + moves[i][1]) < 8)) {
            const isLight = (row + moves[i][0] + col + moves[i][1]) % 2 === 0;
            document.getElementById(`cell-${row + moves[i][0]}-${col + moves[i][1]}`).className = `cell ${isLight ? "light-square" : "dark-square"}`;
        }
    }
}
function returnEmptyChess() {
    let dynamicMatrix = [];
    for (let i = 0; i < BOARD_SIZE; i++) {
        dynamicMatrix[i] = [];
        for (let j = 0; j < BOARD_SIZE; j++) {
            dynamicMatrix[i][j] = 0;
        }
    }
    return dynamicMatrix;
}

const KnightChessboard = () => {
    const [state, setState] = useState(returnEmptyChess)

    return (
        <div className="chessboard-grid">
            {state.map((_, row) =>
                state[row].map((_, col) => {
                    const isLight = (row + col) % 2 === 0;
                    return (
                        <div
                            key={`${row}-${col}`}
                            data-testid={`cell-${row}-${col}`}
                            onMouseOver={() => getKnightMoves(row, col)}
                            onMouseOut={() => outHandler(row, col)}
                            id={`cell-${row}-${col}`}
                            className={`cell ${isLight ? "light-square" : "dark-square"}`}>
                        </div>
                    );
                })
            )}
        </div>
    );
};

export default KnightChessboard;
