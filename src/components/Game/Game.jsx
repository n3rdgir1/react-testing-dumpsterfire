/* eslint-disable react/prefer-stateless-function */
/* eslint-disable class-methods-use-this */
import React from 'react';
import Board from '../Board/Board';

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

export default Game;
