import React from 'react';

const Square = ({ value, onClick }) => (
  <button
    className="square"
    type="button"
    data-testid="square"
    onClick={onClick}
  >
    {value}
  </button>
);

export default Square;
