import React, { useContext } from 'react';
import porg from '../../../assets/Images/porg.png';
import { CountContext } from '../../../utils/Context';

const HelperPorg = () => {
  const { bank, unlockSecondPowerHelper } = useContext(CountContext);
  const cost = 50;
  const power = 1;

  return (
    <div
      className={
        'helper-porg ' + (bank >= cost ? 'helpers' : 'inactive-helpers')
      }
    >
      <img
        onClick={() => unlockSecondPowerHelper(cost, power)}
        src={porg}
        alt='kawaii porg'
        width='100%'
      />
    </div>
  );
};

export default HelperPorg;
