import React, { useContext } from 'react';
import './ClickCounter.css';
import { CountContext } from '../../utils/Context';

const ClickCounter = () => {
  const { clickCounter } = useContext(CountContext);

  return (
    <div className='click-counter'>
      <p>
        {clickCounter}
        <br />
        clicks
      </p>
    </div>
  );
};

export default ClickCounter;
