import React from 'react';
import Clicker from './Clicker';
import HelperPorg from './GameHelpers/HelperPorg';
import HelperEwok from './GameHelpers/HelperEwok';
import HelperC3po from './GameHelpers/HelperC3po';
import HelperR2d2 from './GameHelpers/HelperR2d2';
import HelperXwing from './GameHelpers/HelperXwing';
import HelperFalcon from './GameHelpers/HelperFalcon';
import './ClickersContainer.css';

const ClickersContainer = () => {
  return (
    <div className='clickers-container'>
      <Clicker />
      <HelperPorg />
      <HelperEwok />
      <HelperC3po />
      <HelperR2d2 />
      <HelperXwing />
      <HelperFalcon />
    </div>
  )
}

export default ClickersContainer;