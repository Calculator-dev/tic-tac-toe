import React, { useState } from 'react';
import './style/Login.css';
import "./style/Board.css";
import "./style/NavBar.css";
import "./style/EndGame.css";
import "./style/History.css";
import Login from './components/Login';
import Game from './components/Game';
import AppFooter from './components/AppFooter';

const TicTacToe = () => {

  const [showComponent, setShowComponent] = useState(false);

  const toggleChecked = () => {
    setShowComponent(showComponent => !showComponent);
  }

  return (
    <div className="App">
      {!showComponent && <Login toggleChecked={toggleChecked} />}
      {showComponent && <Game />}
      {showComponent && <AppFooter />}
    </div>
  );
}

export default TicTacToe;
