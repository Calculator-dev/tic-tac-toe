import React, { useState } from "react";

const Login = ({ toggleChecked }) => {

    const [player, setPlayer] = useState("");
    const [secondPlayer, setSecondPlayer] = useState("");


    const SaveData = () => {
        localStorage.setItem("player", player);
        localStorage.setItem("secondPlayer", secondPlayer);
    }

    const SubmitHandler = (e) => {
        e.preventDefault();
        if (/^$/.test(player) || /^$/.test(secondPlayer)) {
        } else {
            setPlayer(player);
            setSecondPlayer(secondPlayer);
            SaveData();
            toggleChecked();
        }
    }

    return (
        <div className="form-container">
            <form className="login-form">
                <h1 className="welcome-message">Welcome to Tic Tac Toe</h1>
                <p className="instructions-message">Please enter player names and click start to play</p>
                <br />
                <label className="player1">
                    Name Player 1:
                    <input value={player} onChange={(e) => setPlayer(e.target.value)} required />
                </label>
                <br />
                <label className="player2">
                    Name Player 2:
                    <input value={secondPlayer} onChange={(e) => setSecondPlayer(e.target.value)} required />
                </label>
                <br />
                <button className="start-button" type="submit" onClick={SubmitHandler}>START</button>
            </form>
        </div>
    )
}

export default Login;