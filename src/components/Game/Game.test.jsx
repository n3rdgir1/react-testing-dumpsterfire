import React from 'react';
import { render } from '@testing-library/react';
import Game from './Game';

jest.mock('../Board/Board');

describe('Game', () => {
  it('renders the board', () => {
    const { getByTestId } = render(<Game />);

    expect(getByTestId('board')).toBeInTheDocument();
  });
});
