/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';


export default ({ value, onClick }) => (
  <>
    <mock-square data-testid="square" value={value} />
    <button data-testid="square-onClick" type="button" onClick={(e) => onClick(e.target.value)} />
  </>
);
