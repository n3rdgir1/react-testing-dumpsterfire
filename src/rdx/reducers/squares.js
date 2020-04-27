const squares = (state = Array(9).fill(null), action = {}) => {
  if (action.name !== 'SQUARE') {
    return state;
  }
  const newState = [...state];
  switch (action.type) {
    case 'UPDATE':
      newState[action.square] = action.value;
      return newState;
    default:
      return state;
  }
};

export default squares;
