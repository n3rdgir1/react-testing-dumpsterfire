const nextPlayer = (state = 'X', action = {}) => {
  if (action.name !== 'SQUARE') {
    return state;
  }

  console.log('nextPlayer');
  switch (action.type) {
    case 'UPDATE':
      return state === 'X' ? 'O' : 'X';
    default:
      return state;
  }
};

export default nextPlayer;
