import Board from './Board';
import App from './App'
import React, { Component } from 'react';
import './App.css';

class Game extends React.Component {
    render() {
        return (
            <div className="container">
                <App/>
                <div className="game">
                    <div className="game-board">
                        <Board />
                    </div>
                    <div className="game-info">
                        <div>{/* status */}</div>
                        <ol>{/* TODO */}</ol>
                    </div>
                </div>
            </div>
        );
    }
}
export default Game;