import React from 'react'
import Datafetch from '../datafetch/Datafetch'

const Launchvehicles = () => {
  const h1="hii from launchvehicals"
  return (
    <div>
      <Datafetch h1={h1} url="https://api.spacexdata.com/v3/ships" />
    </div>
  )
}

export default Launchvehicles
