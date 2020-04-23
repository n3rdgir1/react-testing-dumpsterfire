import React from 'react';

<<<<<<< Updated upstream
export default ({ value }) => (
  <square data-testid="square" value={value} />
=======
export default ({ value, onClick }) => (
  <>
    <mock-square data-testid="square" value={value} />
    <button data-testid="square-onClick" type="button" onClick={(e) => onClick(e.target.value)} />
  </>
>>>>>>> Stashed changes
);
