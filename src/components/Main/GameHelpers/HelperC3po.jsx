import React, { useContext } from 'react';
import C3PO from '../../../assets/Images/C3PO.png';
import { CountContext } from '../../../utils/Context';

const HelperC3po = () => {
  const { bank, unlockHelperC3po } = useContext(CountContext);
  let cost = 500;

  return (
    <div
      className={
        'helper-c3po ' + (bank >= cost ? 'helpers' : 'inactive-helpers')
      }
    >
      <img
        onClick={unlockHelperC3po}
        src={C3PO}
        alt='kawaii C3P0'
        width='100%'
      />
    </div>
  );
};

export default HelperC3po;
