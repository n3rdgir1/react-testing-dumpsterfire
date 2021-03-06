import React from 'react';
import { connect } from 'react-redux';
import Square from '../Square/Square';
import { selectSquare } from '../../rdx/actions/squares';
import useCalculateWinner from '../../hooks/useCalculateWinner';

export const BoardComponent = ({
  squares, handleUpdateSquare, nextPlayer,
}) => {
  const winner = useCalculateWinner(squares);

  const updateSquare = (index) => {
    if (!winner) {
      handleUpdateSquare(index, nextPlayer);
    }
  };

  return (
    <div>
      <div className="board-row">
        <Square value={squares[0]} onClick={() => updateSquare(0)} />
        <Square value={squares[1]} onClick={() => updateSquare(1)} />
        <Square value={squares[2]} onClick={() => updateSquare(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onClick={() => updateSquare(3)} />
        <Square value={squares[4]} onClick={() => updateSquare(4)} />
        <Square value={squares[5]} onClick={() => updateSquare(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onClick={() => updateSquare(6)} />
        <Square value={squares[7]} onClick={() => updateSquare(7)} />
        <Square value={squares[8]} onClick={() => updateSquare(8)} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  squares: state.squares,
  nextPlayer: state.nextPlayer,
});

const mapDispatchToProps = (dispatch) => ({
  handleUpdateSquare: (index, value) => dispatch(selectSquare(index, value)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BoardComponent);
