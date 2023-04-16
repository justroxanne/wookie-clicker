import React from 'react';
import Clicker from './Clicker';
import './ClickersContainer.css';

const ClickersContainer = ({moreCredits, count}) => {
  return (
    <div className='clickers-container'>
      <Clicker moreCredits={moreCredits} count={count}/>
    </div>
  )
}

export default ClickersContainer