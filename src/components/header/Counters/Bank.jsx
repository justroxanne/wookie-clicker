import React, { useContext } from 'react';
import { CountContext } from '../../../utils/Context';

const Bank = () => {
  const { bank } = useContext(CountContext);

  return (
    <div className='bank counter'>
      <p>Bank :&nbsp;</p>
      <p> {bank}</p>
    </div>
  );
};

export default Bank;
