import winner from './winner';
import { UPDATE, WINNER } from '../constants';
import calculateWinner from './calculateWinner';

describe('squares', () => {
  it('has default winner', () => {
    expect(winner()).toEqual(null);
  });

  it('returns the state when the action does not match', () => {
    const initialState = 'state';
    expect(winner(initialState, {
      name: 'other thing', type: UPDATE, winner: Array(9).fill(null),
    })).toEqual(initialState);
    expect(winner(initialState, {
      name: WINNER, type: 'other thing', winner: Array(9).fill(null),
    })).toEqual(initialState);
  });

  it('updates the state when the type matches', () => {
    const squares = Array(9).fill(null).map((_, i) => i);

    expect(winner('something', {
      name: WINNER,
      type: UPDATE,
      squares,
    })).toEqual(calculateWinner(squares));
  });
});
