// KnightChessboard.js
import React, {useState} from "react";

const BOARD_SIZE = 8;

const moves = [[1, 2], [-1, 2], [1, -2], [-1, -2], [2, 1], [-2, 1], [2, -1], [-2, -1]]
const isMovePossible = (row, col, i) => {
    return ((row + moves[i][0]) >= 0 && (row + moves[i][0]) < 8) && ((col + moves[i][1]) >= 0 && (col + moves[i][1]) < 8);
}
const getKnightMoves = (row, col, setIsHovered) => {
    document.getElementById(`cell-${row}-${col}`).className = "selected-square";
    setIsHovered({
        row: row,
        col: col
    })
    for (let i = 0; i < moves.length; i++) {
        if (isMovePossible(row, col, i)) {
            document.getElementById(`cell-${row + moves[i][0]}-${col + moves[i][1]}`).className = 'knight-move-target';
        }
    }
}
const outHandler = (row, col, setIsHovered) => {
    setIsHovered({
        row: -1,
        col: -1
    })
    const isLights = (row + col) % 2 === 0;
    document.getElementById(`cell-${row}-${col}`).className = `cell ${isLights ? "light-square" : "dark-square"}`;
    for (let i = 0; i < moves.length; i++) {
        if (isMovePossible(row, col, i)) {
            const isLight = (row + moves[i][0] + col + moves[i][1]) % 2 === 0;
            document.getElementById(`cell-${row + moves[i][0]}-${col + moves[i][1]}`).className = `cell ${isLight ? "light-square" : "dark-square"}`;
        }
    }
}
const KnightChessboard = () => {
    const [isHovered, setIsHovered] = useState({
        row: -1,
        col: -1
    })
    return (
        <div className="chessboard-grid">
            {Array.from({length: BOARD_SIZE}).map((_, row) =>
                Array.from({length: BOARD_SIZE}).map((_, col) => {
                    const isLight = (row + col) % 2 === 0;
                    return (
                        <div
                            key={`${row}-${col}`}
                            data-testid={`cell-${row}-${col}`}
                            onMouseOver={() => getKnightMoves(row, col, setIsHovered)}
                            onMouseOut={() => outHandler(row, col,setIsHovered)}
                            id={`cell-${row}-${col}`}
                            className={`cell ${isLight ? "light-square" : "dark-square"}`}>
                            {isHovered.row === row && isHovered.col === col && <strong>♞</strong>}
                        </div>
                    );
                })
            )}
        </div>
    );
};

export default KnightChessboard;
