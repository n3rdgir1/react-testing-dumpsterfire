import React from 'react';
import { render } from '@testing-library/react';
import { BoardComponent } from './Board';

jest.mock('../Square/Square');

describe('Board', () => {
  it('renders the squares', () => {
    const squares = Array(9).fill('').map((_, i) => i);
    const updateSquare = jest.fn();
    const { getAllByTestId } = render(
      <BoardComponent
        squares={squares}
        handleUpdateSquare={updateSquare}
      />,
    );

    expect(getAllByTestId('square').length).toEqual(9);
    getAllByTestId('square').forEach((square, index) => {
      expect(square).toHaveAttribute('value', index.toString());
    });
    getAllByTestId('square-onClick').forEach((square, index) => {
      square.click();
      expect(updateSquare).toHaveBeenCalledWith(index, 'X');
    });
  });
});
