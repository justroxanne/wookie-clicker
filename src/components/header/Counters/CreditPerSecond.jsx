import React, { useContext } from 'react';
import { CountContext } from '../../../utils/Context';

const CreditPerSecond = () => {
  const { creditSecond } = useContext(CountContext);
  return (
    <div className='credit-second counter'>
      <p>Credit / Second :&nbsp;</p>
      <p>{creditSecond}</p>
    </div>
  );
};

export default CreditPerSecond;
