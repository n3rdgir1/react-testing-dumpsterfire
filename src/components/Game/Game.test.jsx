import React from 'react';
import { render } from '@testing-library/react';
import { GameComponent } from './Game';

jest.mock('../Board/Board');

describe('Game', () => {
  const calculateWinner = jest.fn();
  let squares = Array(9).fill('').map((_, i) => i);
  let winner = null;
  const nextPlayer = 'upNext';

  let rerender;
  let getByTestId;
  let queryByText;

  const component = () => (
    <GameComponent
      handleCalculateWinner={calculateWinner}
      squares={squares}
      nextPlayer={nextPlayer}
      winner={winner}
    />
  );

  beforeEach(() => {
    ({ getByTestId, queryByText, rerender } = render(component()));
  });

  it('renders the board', () => {
    expect(getByTestId('board')).toBeInTheDocument();
  });

  describe('calculateing the winner', () => {
    it('calculates on load', () => {
      expect(calculateWinner).toHaveBeenCalledWith(squares);
    });

    it('calculates on square change', () => {
      calculateWinner.mockClear();
      squares = Array(9).fill('changed');

      rerender(component());
      expect(calculateWinner).toHaveBeenCalledWith(squares);
    });
  });

  describe('When no winner', () => {
    it('renders the next player', () => {
      expect(queryByText(`Next player: ${nextPlayer}`)).toBeInTheDocument();
    });
  });

  describe('When winner', () => {
    it('renders the winner', () => {
      winner = 'someone';
      rerender(component());

      expect(queryByText(`Winner: ${winner}`)).toBeInTheDocument();
    });
  });
});
