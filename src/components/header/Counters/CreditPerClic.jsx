import React, { useContext } from 'react';
import { CountContext } from '../../../utils/Context';

const CreditPerClic = () => {
  const { countPower } = useContext(CountContext);

  return (
    <div className='credit-clic counter'>
      <p>Credit / Clic :&nbsp;</p>
      <p>{countPower}</p>
    </div>
  );
};

export default CreditPerClic;
