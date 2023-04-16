import React from 'react';
import deathStar from '../../assets/Images/deathStar.png'
import './SettingsButton.css'

const SettingsButton = () => {
  return (
   <div className='settings-button'>
        <img className='death-star'src={deathStar} alt='kawaii death star button'/>
    </div>
  )
}

export default SettingsButton;