import React from 'react';
import Clicker from './Clicker';
import HelperPorg from './HelperPorg';
import HelperEwok from './HelperEwok';
import HelperC3po from './HelperC3po';
import HelperR2d2 from './HelperR2d2';
import HelperXwing from './HelperXwing';
import HelperFalcon from './HelperFalcon';
import './ClickersContainer.css';

const ClickersContainer = ({moreCredits, count}) => {
  return (
    <div className='clickers-container'>
      <Clicker moreCredits={moreCredits} count={count}/>
      <HelperPorg />
      <HelperEwok />
      <HelperC3po />
      <HelperR2d2 />
      <HelperXwing />
      <HelperFalcon />
    </div>
  )
}

export default ClickersContainer