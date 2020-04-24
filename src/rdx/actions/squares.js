import { UPDATE, SQUARE } from '../constants';

// eslint-disable-next-line import/prefer-default-export
export const selectSquare = (square, value) => ({
  type: UPDATE,
  name: SQUARE,
  square,
  value,
});
