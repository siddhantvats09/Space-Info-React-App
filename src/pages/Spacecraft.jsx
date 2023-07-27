import React from 'react'
import Datafetch from '../datafetch/Datafetch'

const Spacecraft = () => {
  const h1="hi from space craft"
  return (
    <div>
       <Datafetch h1={h1} url="https://api.spacexdata.com/v3/rockets" />
    </div>
  )
}

export default Spacecraft
