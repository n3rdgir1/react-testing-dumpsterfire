const nextPlayer = (state = 'X', action = {}) => {
  if (action.name !== 'SQUARE') {
    return state;
  }

  switch (action.type) {
    case 'UPDATE':
      return state === 'X' ? 'O' : 'X';
    default:
      return state;
  }
};

export default nextPlayer;
