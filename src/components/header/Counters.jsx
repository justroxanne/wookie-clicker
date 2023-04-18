import React from 'react';
import CreditPerSecond from './CreditPerSecond';
import CreditPerClic from './CreditPerClic';
import Bank from './Bank';
import './Counters.css';

const Counters = ({count}) => {
  return (
    <div className='counters-container'>
      <CreditPerSecond />
      <CreditPerClic />
      <Bank count={count}/>
    </div>
  )
}

export default Counters