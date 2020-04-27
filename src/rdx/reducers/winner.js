import { WINNER, UPDATE } from '../constants';
import calculateWinner from './calculateWinner';

const winner = (state = null, action = {}) => {
  if (action.name !== WINNER) {
    return state;
  }

  switch (action.type) {
    case UPDATE:
      return calculateWinner(action.squares);
    default:
      return state;
  }
};

export default winner;
