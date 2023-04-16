import Chewie from '../../assets/Images/chewie.png';
import './Clicker.css';



const Clicker = ({moreCredits}) => {

    const handleClick = () => {
        moreCredits();
    }
  
  return (
    <div className='clicker-wookie'>
        <img className='chewie' src={Chewie} onClick={handleClick} alt='kawaii wookie head'/>
    </div>
  )
}

export default Clicker;