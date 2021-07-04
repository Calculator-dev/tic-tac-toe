import React from "react";
import Square from "./Square"

const Board = ({ squares, handleClick, toggleChecked }) => (
    <div className="board">
        {squares.map((square, i) => (
            <Square key={i} value={square} onClick={() => handleClick(i)} toggleChecked={toggleChecked} />
        ))}
    </div>
);

export default Board;