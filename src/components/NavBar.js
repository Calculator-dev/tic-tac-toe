import React from "react";


const NavBar = ({ counterPlayerOne, counterPlayerTwo, counterDraw }) => {

    const playerOne = localStorage.getItem("player");
    const playerTwo = localStorage.getItem("secondPlayer");
    const draw = "Draw";



    return (
        <nav>

            <ul className="navbar-list">
                <li className="game-name">Tic Tac Toe</li>
                <li className="players-win">{playerOne} {counterPlayerOne} - {counterPlayerTwo} {playerTwo}</li>
                <li className="players-draw">{draw}: {counterDraw} </li>
            </ul>
        </nav>
    )
}

export default NavBar;