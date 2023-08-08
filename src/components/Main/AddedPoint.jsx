import React, { useContext } from 'react';
import { CountContext } from '../../utils/Context';
import './addedPoint.css';

const AddedPoint = () => {
  const { countPower } = useContext(CountContext);

  return <div className='floating-point'>{`+${countPower}`}</div>;
};

export default AddedPoint;
