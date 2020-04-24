import React from 'react';
import { render } from '@testing-library/react';
import Square from './Square';

describe('Square', () => {
  it('renders the value', () => {
    const value = 'value';
    const { getByTestId } = render(<Square value={value} />);

    expect(getByTestId('square')).toHaveTextContent(value);
  });

  it('updates the value on click', () => {
    let value = 'starting value';
    const newValue = 'new vaue';

    const component = () => (
      <Square
        value={value}
        onClick={() => { value = newValue; }}
      />
    );
    const { getByTestId, rerender } = render(component());

    getByTestId('square').click();
    rerender(component());

    expect(getByTestId('square')).toHaveTextContent(newValue);
  });
});
