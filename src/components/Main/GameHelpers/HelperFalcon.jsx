import React, { useContext } from 'react';
import Falcon from '../../../assets/Images/Falcon.png';
import { CountContext } from '../../../utils/Context';

const HelperFalcon = () => {
  const { bank, unlockFalcon } = useContext(CountContext);
  let cost = 1000000;

  return (
    <div
      className={
        'helper-falcon ' + (bank >= cost ? 'helpers' : 'inactive-helpers')
      }
    >
      <img
        onClick={unlockFalcon}
        src={Falcon}
        alt='kawaii millenium falcon'
        width='100%'
      />
    </div>
  );
};

export default HelperFalcon;
