import React from 'react';
import { render } from '@testing-library/react';
import { BoardComponent } from './Board';

jest.mock('../Square/Square');

describe('Board', () => {
  let squares = Array(9).fill('').map((_, i) => i);
  const updateSquare = jest.fn();
  const nextPlayer = 'upNext';

  let getAllByTestId;
  let rerender;

  const component = () => (
    <BoardComponent
      squares={squares}
      handleUpdateSquare={updateSquare}
      nextPlayer={nextPlayer}
    />
  );

  beforeEach(() => {
    ({ getAllByTestId, rerender } = render(component()));
  });

  it('renders the squares', () => {
    expect(getAllByTestId('square').length).toEqual(9);
    getAllByTestId('square').forEach((square, index) => {
      expect(square).toHaveAttribute('value', index.toString());
    });
    getAllByTestId('square-onClick').forEach((square, index) => {
      square.click();
      expect(updateSquare).toHaveBeenCalledWith(index, nextPlayer);
    });
  });


  describe('when no winner', () => {
    it('updates the square on click', () => {
      getAllByTestId('square-onClick').forEach((square, index) => {
        square.click();
        expect(updateSquare).toHaveBeenCalledWith(index, nextPlayer);
      });
    });
  });

  describe('when winner', () => {
    it('does not update the square on click', () => {
      squares = ['x', 'x', 'x', null, null, null, null, null, null];
      updateSquare.mockClear();
      rerender(component());

      getAllByTestId('square-onClick').forEach((square) => {
        square.click();
        expect(updateSquare).not.toHaveBeenCalled();
      });
    });
  });
});
