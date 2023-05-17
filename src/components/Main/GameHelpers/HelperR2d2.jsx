import React, { useContext } from 'react';
import R2D2 from '../../../assets/Images/R2D2.png';
import { CountContext } from '../../../utils/Context';

const HelperR2d2 = () => {
  const { bank, unlockHelperR2d2 } = useContext(CountContext);
  let cost = 1000;

  return (
    <div
      className={
        'helper-r2d2 ' + (bank >= cost ? 'helpers' : 'inactive-helpers')
      }
    >
      <img
        onClick={unlockHelperR2d2}
        src={R2D2}
        alt='kawaii R2D2'
        width='100%'
      />
    </div>
  );
};

export default HelperR2d2;
