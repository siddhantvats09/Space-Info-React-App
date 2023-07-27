import React from 'react'
import Datafetch from '../datafetch/Datafetch'

const Agency = () => {
  const h1="hi from Missions"
  return (
    <div>
     <Datafetch h1={h1} url="https://api.spacexdata.com/v3/missions" />
    </div>
  )
}

export default Agency;
