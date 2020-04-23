import React from 'react';
import { render } from '@testing-library/react';
import Square from './Square';

describe('Square', () => {
  it('renders the value', () => {
    const value = 'value';
    const { getByTestId } = render(<Square value={value} />);

    expect(getByTestId('square')).toHaveTextContent(value);
  });
});
