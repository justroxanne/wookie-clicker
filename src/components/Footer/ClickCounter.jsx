import React from 'react';
import './ClickCounter.css'

const ClickCounter = ({count}) => {
  return (
    <div className='click-counter'>{count} clicks</div>
  )
}

export default ClickCounter;