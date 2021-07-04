import React, { useState, useEffect } from "react";
import Board from "./Board";
import EndGame from "./EndGame";
import NavBar from "./NavBar";

const Game = () => {

    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXisNext] = useState(true);
    const [msg, setMsg] = useState("");
    const [counterPlayerOne, setCounterPlayerOne] = useState(0);
    const [counterPlayerTwo, setCounterPlayerTwo] = useState(0);
    const [counterDraw, setCounterDraw] = useState(0);
    const [show, setShow] = useState(false);
    const [wins, setWins] = useState([]);


    const playerOne = localStorage.getItem("player");
    const playerTwo = localStorage.getItem("secondPlayer");
    const draw = "Draw";

    let today = new Date();
    let date = new Date().toLocaleDateString();
    let time = today.getHours() + ":" + today.getMinutes();


    const current = (xIsNext ? playerTwo : playerOne);



    const ShowToggle = () => {
        setShow(show => !show);
    }



    const calculateWinner = (squares) => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }

    const winner = calculateWinner(board);

    const handleClick = (i) => {
        const boardCopy = [...board];
        if (boardCopy[i]) return setMsg("Choose unoccupied cell!");
        if (winner) return;
        boardCopy[i] = xIsNext ? "X" : "O";
        setBoard(boardCopy);
        setXisNext(!xIsNext);
        setMsg("");

    };

    const versus = "vs";



    useEffect(() => {
        if (winner && !xIsNext) {
            setCounterPlayerOne((prevScore) => prevScore + 1);
            setShow(true);
            setWins(wins => [...wins, (date + " " + time + " " + playerOne + " " + versus + " " + playerTwo + " " + current)]);
        } else if (winner && xIsNext) {
            setCounterPlayerTwo((prevScore) => prevScore + 1);
            setShow(true);
            setWins(wins => [...wins, (date + " " + time + " " + playerOne + " " + versus + " " + playerTwo + " " + current)]);
        } else if (board.every(Boolean)) {
            setCounterDraw((prevScore) => prevScore + 1);
            setShow(true);
            setWins(wins => [...wins, (date + " " + time + " " + playerOne + " " + versus + " " + playerTwo + " " + draw)]);
        }
    }, [winner, xIsNext, board, current, date, time, playerOne, playerTwo, wins.winner])



    useEffect(() => {

        const wins = localStorage.getItem('wins')

        if (wins) {
            setWins(JSON.parse(wins))
        }

    }, [])

    useEffect(() => {

        localStorage.setItem('wins', JSON.stringify(wins))

    })

    window.onunload = function () {
        localStorage.removeItem('wins')
    }

    return (
        <div className="board-container">
            <NavBar
                counterPlayerOne={counterPlayerOne}
                counterPlayerTwo={counterPlayerTwo}
                counterDraw={counterDraw}
            />
            {!show && <p className="next-player">{xIsNext ? playerOne + " is on the move with X" : playerTwo + " is on the move with O"}</p>}
            {show && <EndGame
                ShowToggle={ShowToggle}
                setBoard={setBoard}
                setMsg={setMsg}
                calculateWinner={calculateWinner}
                board={board}
                current={current}
                setShow={setShow}
                wins={wins}
            />}
            <br />
            {!show && <Board
                handleClick={handleClick}
                squares={board} />}
            <p className="message">{msg}</p>
        </div>
    )
}

export default Game;