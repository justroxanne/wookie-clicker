import React, { useContext } from 'react';
import C3PO from '../../../assets/Images/C3PO.png';
import { CountContext } from '../../../utils/Context';

const HelperC3po = () => {
  const { bank, unlockSecondPowerHelper } = useContext(CountContext);
  const cost = 500;
  const power = 10;

  return (
    <div
      className={
        'helper-c3po ' + (bank >= cost ? 'helpers' : 'inactive-helpers')
      }
    >
      <img
        onClick={() => unlockSecondPowerHelper(cost, power)}
        src={C3PO}
        alt='kawaii C3P0'
        width='100%'
      />
    </div>
  );
};

export default HelperC3po;
