import React from 'react'
import Datafetch from '../datafetch/Datafetch'

const Locations = () => {
  const h1="hi from launch pads"
  return (
    <div>
      <Datafetch h1={h1} url='https://api.spacexdata.com/v3/launchpads' />
    </div>
  )
}

export default Locations
