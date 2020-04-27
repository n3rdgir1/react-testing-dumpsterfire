import React from 'react';
import { connect } from 'react-redux';
import Board from '../Board/Board';
import useCalculateWinner from '../../hooks/useCalculateWinner';

export const GameComponent = ({
  squares, nextPlayer,
}) => {
  const winner = useCalculateWinner(squares);

  const status = winner ? `Winner: ${winner}` : `Next player: ${nextPlayer}`;

  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  squares: state.squares,
  nextPlayer: state.nextPlayer,
  winner: state.winner,
});

export default connect(
  mapStateToProps,
  {},
)(GameComponent);
