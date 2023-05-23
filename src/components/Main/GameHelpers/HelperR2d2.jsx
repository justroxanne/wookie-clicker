import React, { useContext } from 'react';
import R2D2 from '../../../assets/Images/R2D2.png';
import { CountContext } from '../../../utils/Context';

const HelperR2d2 = () => {
  const { bank, unlockClicHelper } = useContext(CountContext);
  const cost = 1000;
  const power = 10;

  return (
    <div
      className={
        'helper-r2d2 ' + (bank >= cost ? 'helpers' : 'inactive-helpers')
      }
    >
      <img
        onClick={() => unlockClicHelper(cost, power)}
        src={R2D2}
        alt='kawaii R2D2'
        width='100%'
      />
    </div>
  );
};

export default HelperR2d2;
