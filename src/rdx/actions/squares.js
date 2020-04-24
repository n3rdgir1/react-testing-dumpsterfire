export const SQUARE = 'SQUARE';
export const UPDATE = 'UPDATE';

export const selectSquare = (square, value) => ({
  type: UPDATE,
  name: SQUARE,
  square,
  value,
});
