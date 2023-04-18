import React from 'react'

const Bank = ({count}) => {
  return (
    <div className='bank counter'>
      <p>Bank :&nbsp;</p>
      <p> {count}</p>
    </div>
  )
}

export default Bank