import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Board from '../Board/Board';
import { calculateWinner } from '../../rdx/actions/winner';

export const GameComponent = ({
  handleCalculateWinner, squares, nextPlayer, winner,
}) => {
  useEffect(() => {
    handleCalculateWinner(squares);
  }, [handleCalculateWinner, squares]);

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

const mapDispatchToProps = (dispatch) => ({
  handleCalculateWinner: (squares) => dispatch(calculateWinner(squares)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GameComponent);
