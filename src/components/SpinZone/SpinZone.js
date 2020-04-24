import React from 'react'

import './SpinZone.scss';

export default function SpinZone({ handleSpin, spinValue }) {
  return (
    <div className='spin-zone'>
      <button onClick={handleSpin}>Spin</button>
      <div className='current-spin-value'>{spinValue}</div>
    </div>
  )
}
