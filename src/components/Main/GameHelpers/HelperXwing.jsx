import React, { useContext } from 'react';
import Xwing from '../../../assets/Images/xwing.png';
import { CountContext } from '../../../utils/Context';

const HelperXwing = () => {
  const { bank, unlockHelperXwing } = useContext(CountContext);
  let cost = 10000;

  return (
    <div
      className={
        'helper-xwing ' + (bank >= cost ? 'helpers' : 'inactive-helpers')
      }
    >
      <img
        onClick={unlockHelperXwing}
        src={Xwing}
        alt='kawaii xwing'
        width='100%'
      />
    </div>
  );
};

export default HelperXwing;
