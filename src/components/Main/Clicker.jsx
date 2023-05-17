import React, { useContext, useRef, useState } from 'react';
import { CountContext } from '../../utils/Context';
import Chewie from '../../assets/Images/chewie.png';
import './Clicker.css';

const Clicker = () => {
  const clicker = useRef(null);

  const { moreClick, countPower, manualClick, moreCredits } =
    useContext(CountContext);

  const handleClick = (event) => {
    moreClick();
    moreCredits();
    manualClick();

    const point = document.createElement('div');
    point.className = 'floating-point';
    point.innerText = `+${countPower}`;
    // point.style.left = event.clientX + 'px';
    // point.style.top = event.clientY + 'px';

    document.body.appendChild(point);

    setTimeout(() => {
      document.body.removeChild(point);
    }, 3000);
  };

  return (
    <div className='clicker-wookie' ref={clicker}>
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
