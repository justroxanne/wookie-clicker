import React from 'react';
import CreditPerSecond from './CreditPerSecond';
import CreditPerClic from './CreditPerClic';
import Bank from './Bank';
import './Counters.css';

const Counters = () => {
  return (
    <div className='counters-container'>
      <CreditPerSecond />
      <CreditPerClic />
      <Bank />
    </div>
  )
}

export default Counters