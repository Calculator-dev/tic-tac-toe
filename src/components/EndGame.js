import React, { useState } from "react";

const EndGame = ({ setShow, setBoard, setMsg, calculateWinner, board, current, wins }) => {

    const [showMessage, setShowMessage] = useState(false);

    const Message = () => {
        setShowMessage(showMessage => !showMessage);
    }

    const TryAgainHandler = () => {
        setBoard(Array(9).fill(null));
        setShow();
        setMsg("");
    }

    const getStatus = (board) => {
        const winner = calculateWinner(board)
        if (winner) {
            return `Congratulations ${current} you won `
        } else if (board.every(Boolean)) {
            return `Draw`
        }
    }

    const status = getStatus(board);

    const clickHandler = () => {
        setShowMessage(false);
    }

    const Reset = () => {
        window.location.reload();
    }


    return (
        <div className="end-game">
            <p className="status">{status}</p>
            <div className="div-buttons">
                <button
                    className="retry-button"
                    onClick={TryAgainHandler}>
                    TRY AGAIN
                </button>
                {!showMessage && <button className="history-button" onClick={() => { clickHandler(); Message(); }}>GAME HISTORY</button>}
                <button className="reset-button" onClick={Reset}>RESET</button>
            </div>
            {showMessage && <div className="wins">
                <ul>
                    {wins.map((wins, i) => (
                        <li className="win-messages" key={i}>
                            <span>{wins}</span>
                        </li>
                    ))}
                </ul>
            </div>}

        </div>
    )
}
export default EndGame;