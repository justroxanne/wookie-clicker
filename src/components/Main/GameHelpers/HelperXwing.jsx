import React, { useContext } from 'react';
import Xwing from '../../../assets/Images/xwing.png';
import { CountContext } from '../../../utils/Context';

const HelperXwing = () => {
  const { bank, unlockClicHelper } = useContext(CountContext);
  const cost = 10000;
  const power = 100;

  return (
    <div
      className={
        'helper-xwing ' + (bank >= cost ? 'helpers' : 'inactive-helpers')
      }
    >
      <img
        onClick={() => unlockClicHelper(cost, power)}
        src={Xwing}
        alt='kawaii xwing'
        width='100%'
      />
    </div>
  );
};

export default HelperXwing;
