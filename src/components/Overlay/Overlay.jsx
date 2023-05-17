import React from 'react';
import './Overlay.css';
import Porg from '../../assets/Images/porg.png';
import Ewok from '../../assets/Images/ewok.png';
import C3PO from '../../assets/Images/C3PO.png';
import R2D2 from '../../assets/Images/R2D2.png';
import XWing from '../../assets/Images/xwing.png';
import Falcon from '../../assets/Images/Falcon.png';

const Overlay = ({ target }) => {
  return (
    <div className='Overlay' ref={target.current}>
      <div className='settings'>
        <div className='helper-infos'>
          <img src={Porg} alt='kawaii porg' className='helper-image' />
          <div className='infos'>
            <h3>+ 1 credit / second</h3>
            <p>Price: 50 credits</p>
          </div>
        </div>
        <div className='helper-infos'>
          <img src={Ewok} alt='kawaii ewok' className='helper-image' />
          <div className='infos'>
            <h3>+ 1 credit / clic</h3>
            <p>Price: 100 credits</p>
          </div>
        </div>
        <div className='helper-infos'>
          <img src={C3PO} alt='kawaii C3PO' className='helper-image' />
          <div className='infos'>
            <h3>+ 10 credits / second</h3>
            <p>Price: 500 credits</p>
          </div>
        </div>
        <div className='helper-infos'>
          <img src={R2D2} alt='kawaii R2D2' className='helper-image' />
          <div className='infos'>
            <h3>+ 10 credits / clic</h3>
            <p>Price: 1000 credits</p>
          </div>
        </div>
        <div className='helper-infos'>
          <img src={XWing} alt='kawaii X-Wing' className='helper-image' />
          <div className='infos'>
            <h3>+ 100 credits / clic</h3>
            <p>Price: 10 000 credits</p>
          </div>
        </div>
        <div className='helper-infos'>
          <img
            src={Falcon}
            alt='kawaii Millenium Falcon'
            className='helper-image'
          />
          <div className='infos'>
            <h3>Surprise !</h3>
            <p>Price: 1 000 000 credits</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overlay;
