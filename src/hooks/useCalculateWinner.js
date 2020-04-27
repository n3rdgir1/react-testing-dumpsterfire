import { useEffect, useState } from 'react';
import calculateWinner from './calculateWinner';

const useCalculateWinner = (squares) => {
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    setWinner(calculateWinner(squares));
  }, [squares]);

  return winner;
};

export default useCalculateWinner;
