import React from 'react';
import { render } from '@testing-library/react';
import Board from './Board';

jest.mock('../Square/Square');

describe('Board', () => {
  it('renders the squares', () => {
    const { getAllByTestId } = render(<Board />);

    expect(getAllByTestId('square').length).toEqual(9);
    getAllByTestId('square').forEach((square, index) => {
      expect(square).toHaveAttribute('value', index.toString());
    });
  });
});
