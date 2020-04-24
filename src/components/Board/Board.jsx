import React from 'react';
import { connect } from 'react-redux';
import Square from '../Square/Square';
import { selectSquare } from '../../rdx/actions/squares';

export const BoardComponent = ({ squares, handleUpdateSquare }) => {
  const status = 'Next player: X';

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onClick={() => handleUpdateSquare(0, 'X')} />
        <Square value={squares[1]} onClick={() => handleUpdateSquare(1, 'X')} />
        <Square value={squares[2]} onClick={() => handleUpdateSquare(2, 'X')} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onClick={() => handleUpdateSquare(3, 'X')} />
        <Square value={squares[4]} onClick={() => handleUpdateSquare(4, 'X')} />
        <Square value={squares[5]} onClick={() => handleUpdateSquare(5, 'X')} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onClick={() => handleUpdateSquare(6, 'X')} />
        <Square value={squares[7]} onClick={() => handleUpdateSquare(7, 'X')} />
        <Square value={squares[8]} onClick={() => handleUpdateSquare(8, 'X')} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  squares: state.squares,
});

const mapDispatchToProps = (dispatch) => ({
  handleUpdateSquare: (index, value) => dispatch(selectSquare(index, value)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BoardComponent);
