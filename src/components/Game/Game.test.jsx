import React from 'react';
import { render } from '@testing-library/react';
import { GameComponent } from './Game';

jest.mock('../Board/Board');

describe('Game', () => {
  let squares = Array(9).fill('').map((_, i) => i);
  const nextPlayer = 'upNext';

  let rerender;
  let getByTestId;
  let queryByText;

  const component = () => (
    <GameComponent
      squares={squares}
      nextPlayer={nextPlayer}
    />
  );

  beforeEach(() => {
    ({ getByTestId, queryByText, rerender } = render(component()));
  });

  it('renders the board', () => {
    expect(getByTestId('board')).toBeInTheDocument();
  });

  describe('When no winner', () => {
    it('renders the next player', () => {
      expect(queryByText(`Next player: ${nextPlayer}`)).toBeInTheDocument();
    });
  });

  describe('When winner', () => {
    it('renders the winner', () => {
      squares = ['x', 'x', 'x', null, null, null, null, null, null];
      rerender(component());

      expect(queryByText('Winner: x')).toBeInTheDocument();
    });
  });
});
