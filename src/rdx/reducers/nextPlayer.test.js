import nextPlayer from './nextPlayer';
import { UPDATE, SQUARE } from '../constants';

describe('nextPlayer', () => {
  it('has default nextPlayer', () => {
    expect(nextPlayer()).toEqual('X');
  });

  it('returns the state when the action does not match', () => {
    const initialState = 'state';
    expect(nextPlayer(initialState, {
      name: 'other thing', type: UPDATE, square: 3, value: 'new state',
    })).toEqual(initialState);
    expect(nextPlayer(initialState, {
      name: SQUARE, type: 'other thing', square: 3, value: 'new state',
    })).toEqual(initialState);
  });

  it('updates the state when the type matches', () => {
    expect(nextPlayer('X', { name: SQUARE, type: UPDATE })).toEqual('O');
    expect(nextPlayer('O', { name: SQUARE, type: UPDATE })).toEqual('X');
  });
});
