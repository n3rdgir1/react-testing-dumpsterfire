import { UPDATE, WINNER } from '../constants';

// eslint-disable-next-line import/prefer-default-export
export const calculateWinner = (squares) => ({
  type: UPDATE,
  name: WINNER,
  squares,
});
