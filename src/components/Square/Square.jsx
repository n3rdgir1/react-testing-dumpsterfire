import React from 'react';

const Square = ({ value }) => (
  <button className="square" type="button" data-testid="square">
    {value}
  </button>
);

export default Square;
