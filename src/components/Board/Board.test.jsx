import React from 'react';
import { render } from '@testing-library/react';
import { BoardComponent } from './Board';

jest.mock('../Square/Square');

describe('Board', () => {
  const squares = Array(9).fill('').map((_, i) => i);
  const updateSquare = jest.fn();
  const nextPlayer = 'upNext';

  let getAllByTestId;
  let queryByText;

  beforeEach(() => {
    ({ getAllByTestId, queryByText } = render(
      <BoardComponent
        squares={squares}
        handleUpdateSquare={updateSquare}
        nextPlayer={nextPlayer}
      />,
    ));
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

  it('renders the next player', () => {
    expect(queryByText(`Next player: ${nextPlayer}`)).toBeInTheDocument();
  });
});
