import React, { useContext } from 'react';
import Ewok from '../../../assets/Images/ewok.png';
import { CountContext } from '../../../utils/Context';

const HelperEwok = () => {
  const { bank, unlockClicHelper } = useContext(CountContext);
  const cost = 100;
  const power = 1;

  return (
    <div
      className={
        'helper-ewok ' + (bank >= cost ? 'helpers' : 'inactive-helpers')
      }
    >
      <img
        onClick={() => unlockClicHelper(cost, power)}
        src={Ewok}
        alt='kawaii ewok'
        width='100%'
      />
    </div>
  );
};

export default HelperEwok;
