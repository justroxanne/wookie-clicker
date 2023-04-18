import React from 'react';
import './Overlay.css';
import Porg from '../../assets/Images/porg.png';
import Ewok from '../../assets/Images/ewok.png';
import C3PO from '../../assets/Images/C3PO.png';
import R2D2 from '../../assets/Images/R2D2.png';
import XWing from '../../assets/Images/xwing.png';
import Falcon from '../../assets/Images/Falcon.png';



const Overlay = ({target}) => {
  return (
    <div className='Overlay' target={target.current}>
        <div className='settings'>
            <div className='helper-infos'>
                <img src={Porg} alt='kawaii porg' className='helper-image'/>
                <p>Power: 1 credit/clic<br/>Price: 50 credits</p>
            </div>
            <div className="helper-infos">
                <img src={Ewok} alt="kawaii ewok" className="helper-image" />
                <p>Power: 1 credit/second<br/>Price: 500 credits</p>
            </div>
            <div className="helper-infos">
                <img src={C3PO} alt="kawaii C3PO" className="helper-image" />
                <p>Power: 10 credits/clic<br/>Price: 1000 credits</p>
            </div>
            <div className="helper-infos">
                <img src={R2D2} alt="kawaii R2D2" className="helper-image" />
                <p>Power: 10 credits/second<br/>Price: 5000 credits</p>
            </div>
            <div className="helper-infos">
                <img src={XWing} alt="kawaii X-Wing" className="helper-image" />
                <p>Power: 100 credits/clic<br/>Price: 10 000 credits</p>
            </div>
            <div className="helper-infos">
                <img src={Falcon} alt="kawaii Millenium Falcon" className="helper-image" />
                <p>Power: surprise !<br/>Price: 1 000 000 credits</p>
            </div>
        </div>
    </div>
  )
}

export default Overlay