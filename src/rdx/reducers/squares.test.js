import squares from './squares';
import { UPDATE, SQUARE } from '../actions/squares';

describe('squares', () => {
  it('has default squares', () => {
    expect(squares()).toEqual(Array(9).fill(null));
  });

  it('returns the state when the action does not match', () => {
    const initialState = 'state';
    expect(squares(initialState, {
      name: 'other thing', type: UPDATE, square: 3, value: 'new state',
    })).toEqual(initialState);
    expect(squares(initialState, {
      name: SQUARE, type: 'other thing', square: 3, value: 'new state',
    })).toEqual(initialState);
  });

  it('updates the state when the type matches', () => {
    const initialState = Array(9).fill(null).map((_, i) => i);
    const value = 'new value';

    expect(squares(initialState, {
      name: SQUARE,
      type: UPDATE,
      square: 3,
      value,
    })).toEqual([
      0, 1, 2, value, 4, 5, 6, 7, 8,
    ]);
  });
});
