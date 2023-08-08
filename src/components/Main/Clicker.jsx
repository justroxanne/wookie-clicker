import React, { useContext, useRef, useState, useEffect } from 'react';
import { CountContext } from '../../utils/Context';
import AddedPoint from './AddedPoint';
import Chewie from '../../assets/Images/chewie.png';
import './Clicker.css';

const Clicker = () => {
  const clicker = useRef(null);
  const [floatingPoints, setFloatingPoints] = useState([]);

  const { moreClick, manualClick, moreCredits } = useContext(CountContext);

  const handleClick = (event) => {
    moreClick();
    moreCredits();
    manualClick();
    setFloatingPoints([
      ...floatingPoints,
      <AddedPoint key={Date.now() + Math.random()} />,
    ]);
  };

  useEffect(() => {
    if (floatingPoints.length > 0) {
      const timeoutId = setTimeout(() => {
        setFloatingPoints([]);
      }, 3000);

      return () => clearTimeout(timeoutId);
    }
  }, [floatingPoints]);

  return (
    <div className='clicker-wookie' ref={clicker}>
      {floatingPoints}
      <img
        className='chewie'
        src={Chewie}
        onClick={handleClick}
        alt='kawaii wookie head'
      />
    </div>
  );
};

export default Clicker;
