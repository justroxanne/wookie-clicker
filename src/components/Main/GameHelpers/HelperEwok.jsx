import React, { useContext } from 'react';
import Ewok from '../../../assets/Images/ewok.png';
import { CountContext } from '../../../utils/Context';

const HelperEwok = () => {
  const { bank, unlockHelperEwok } = useContext(CountContext);
  let cost = 100;

  return (
    <div
      className={
        'helper-ewok ' + (bank >= cost ? 'helpers' : 'inactive-helpers')
      }
    >
      <img
        onClick={unlockHelperEwok}
        src={Ewok}
        alt='kawaii ewok'
        width='100%'
      />
    </div>
  );
};

export default HelperEwok;
