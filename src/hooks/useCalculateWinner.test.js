import { renderHook } from '@testing-library/react-hooks';
import useCalculateWinner from './useCalculateWinner';
import calculateWinner from './calculateWinner';

describe('calculateing the winner', () => {
  let squares = Array(9).fill(null);

  it('calculates on load', () => {
    const { result } = renderHook(
      (s) => useCalculateWinner(s),
      { initialProps: squares },
    );
    expect(result.current).toEqual(calculateWinner(squares));
  });

  it('calculates on square change', () => {
    const { result, rerender } = renderHook(
      (s) => useCalculateWinner(s),
      { initialProps: squares },
    );

    squares = [
      'X', 'X', 'X',
      'O', 'O', null,
      null, null, null,
    ];
    rerender(squares);
    expect(result.current).toEqual(calculateWinner(squares));
  });
});
